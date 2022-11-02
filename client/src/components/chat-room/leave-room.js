import { LitElement, html } from "lit";
import style from "./chat-container.css";
import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";

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

  static styles = [style];

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
