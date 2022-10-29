import { io } from "socket.io-client";

const chatForm = document.getElementById("chat-form");
const chatMessages = document.querySelector(".chat-messages");
const userAskedForJoke = document.getElementById("joke");
const userList = document.getElementById("users");

const { username } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

// const socket = io("https://localhost:3000.com");

// import * as io from 'socket.io-client';

// import { Manager } from "socket.io-client";
// const manager = new Manager("http://localhost:8000");
// const socket = manager. socket("/")

// import { Server } from "socket.io";
// import { io } from "socket.io-client";
// const socket = io("ws://localhost:8000");
// import io from 'socket.io/node_modules/socket.io-client';

// const io = require("socket.io-client/dist/socket.io")

// const socket = io("http");

// const socket = io("http://localhost:8000");

const socket = io();


socket.emit(
  "message", "hi");

console.log("main.js running");

socket.emit("joinChat", { username });

socket.on("roomUsers", ({ users }) => {
  displayUsersList(users);
});

socket.on("message", (message) => {
  displayMessage(message);

  chatMessages.scrollTop = chatMessages.scrollHeight;
});

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("send button click - event submit");

  const msg = e.target.elements.msg.value;
  socket.emit("message", msg);

  e.target.elements.msg.value = "";
});

userAskedForJoke.addEventListener("click", () => {
  socket.emit("message", "I want a magical joke!");
});

function displayUsersList(users) {
  userList.innerHTML = "";
  users.forEach((user) => {
    const li = document.createElement("li");
    li.innerHTML = `<i class="fa-solid fa-hat-wizard"></i> ${user.username}`;
    userList.appendChild(li);
  });
}

function displayMessage(message) {
  const div = document.createElement("div");
  if (message.username == "The Magical Bot") {
    div.classList.add("bot-message");
  } else {
    div.classList.add("user-message");
  }
  div.innerHTML = `<p class="meta">${message.username}<span>${message.time}</span></p>
  <p class="text">
  ${message.text}
  </p>`;
  chatMessages.appendChild(div);
}
