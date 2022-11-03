import { LitElement, html } from "lit";
import Fontawesome from "lit-fontawesome";
import ChatContainerStyle from "./style/chat-container.css";
import sharedStyle from "../shared/shared-style.css";
import buttonStyle from "../shared/button-style.css";
import "./leave-room";
import { chatRoomName } from "../shared/constants.js";
import { MessageSendingController } from "./controllers/message-senders";
import { DisplayController } from "./controllers/displays";

export class ChatHeader extends LitElement {
  displayController = new DisplayController(this, this.renderRoot);
  messageSendingController = new MessageSendingController(
    this,
    this.socket
  );

  static properties = {
    _users: {},
  };

  constructor() {
    super();
  }

  static styles = [ChatContainerStyle, buttonStyle, sharedStyle, Fontawesome];

  render() {
    return html`
    <header class="chat-header">
    <h1>
      ${chatRoomName} <i class="fa fa-magic" aria-hidden="true"></i>
    </h1>
    <button class="btn" id="joke" @click="${this.messageSendingController.onJokeAsked}">
      I want a magical joke! <i class="fa-regular fa-face-laugh-beam"></i>
    </button>
    <leave-room><leave-room/>
  </header>`;
  }
}

window.customElements.define("chat-header", ChatHeader);
