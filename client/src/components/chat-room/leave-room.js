import { LitElement, html } from "lit";
import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
import ChatContainerStyle from "./style/chat-container.css";
import buttonStyle from "../shared/button-style.css";
import leaveRoomStyle from "./style/leave-room.css";

export class LeaveRoom extends LitElement {
  static properties = {
    _users: {},
  };

  constructor() {
    super();
    this.socket = io("http://localhost:3000", {
      extraHeaders: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  static styles = [ChatContainerStyle, buttonStyle, leaveRoomStyle];

  render() {
    return html`
      <div class="hiddenText">
        <span class="stay">Stay!</span>
        <a href="index.html" button class="btn"
          >Leave Room <i class="fa-solid fa-person-walking"></i
        ></a>
      </div>
    `;
  }
}

window.customElements.define("leave-room", LeaveRoom);
