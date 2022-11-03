import { LitElement, html } from "lit";
import ChatContainerStyle from "./style/chat-container.css";
import buttonStyle from "../shared/button-style.css";
import leaveRoomStyle from "./style/leave-room.css";

export class LeaveRoom extends LitElement {
  static properties = {};

  constructor() {
    super();
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
