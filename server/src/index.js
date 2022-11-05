import express from "express";
import httpServer from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import formatMessage from "../utils/messages.js";
import {
  userJoin,
  getCurrentUser,
  deleteUser,
  getRoomUsers,
} from "../utils/users.js";
import { defaultRoom } from "./constants.js";
import commons from "../../commons.json" assert { type: "json" };
import handleMessageByBot from "./chat-bot.js";

const app = express();
app.use(cors());
const http = httpServer.createServer(app);

http.listen(3000, () => {
  console.log("listening on *:3000");
});

const io = new Server(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  socket.on("userJoinedChat", ({ username }) => {
    userJoin(socket.id, username);
    socket.join(defaultRoom);

    socket.emit(
      "message",
      formatMessage(
        `${commons.botIconAndName}`,
        `Welcome ${username} to our magical chat!`
      )
    );

    // broadcast to everybody except the user that connected
    socket.broadcast.emit(
      "message",
      formatMessage(`${commons.botIconAndName}`, `${username} joined our chat room!`)
    );

    // update users list view
    io.to(defaultRoom).emit("roomUsers", getRoomUsers());
  });

  socket.on("message", (msg) => {
    const userId = socket.id;
    const user = getCurrentUser(userId);
    io.to(defaultRoom).emit(
      "message",
      formatMessage(
        `<i class="fa fa-user" aria-hidden="true"></i> ${user.username}`,
        msg
      )
    );

    handleMessageByBot(io, msg, userId);
  });

  socket.on("disconnect", () => {
    const leavingUser = deleteUser(socket.id);

    if (leavingUser) {
      // update users list view
      io.to(defaultRoom).emit("roomUsers", getRoomUsers());

      socket.broadcast.emit(
        "message",
        formatMessage(
          `${commons.botIconAndName}`,
          `${leavingUser.username} just left our chat room!`
        )
      );
    }
  });
});
