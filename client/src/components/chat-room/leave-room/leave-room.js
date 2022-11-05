import { LitElement, html } from "lit";
import ChatContainerStyle from "../chat-container/chat-container.css";
import buttonStyle from "../../../styles/button-style.css";
import leaveRoomStyle from "../leave-room/leave-room.css";

export class LeaveRoom extends LitElement {
  static styles = [ChatContainerStyle, buttonStyle, leaveRoomStyle];

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="hiddenText">
        <span class="stay">Stay!</span>
        <a href="index.html" button class="btn">Leave Room</a>
      </div>
    `;
  }
}

window.customElements.define("leave-room", LeaveRoom);
