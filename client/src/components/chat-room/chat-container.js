import { LitElement, html } from "lit";
import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
import Fontawesome from "lit-fontawesome";
import ChatContainerStyle from "./style/chat-container.css";
import sharedStyle from "../shared/shared-style.css";
import buttonStyle from "../shared/button-style.css";
import "./chat-header";
import { botName } from "../shared/constants.js";
import { DisplayController } from "./controllers/displays";
import { MessageSendingController } from "./controllers/message-senders";

const { username } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

export class ChatContainer extends LitElement {
  displayController = new DisplayController(this, this.renderRoot);
  messageSendingController = new MessageSendingController(
    this,
    this.socket,
    this.shadowRoot,
    this.console,
    this.inputMessage
  );

  static properties = {
    users: {},
  };

  constructor() {
    super();
    this.socket = io("http://localhost:3000", {
      extraHeaders: {
        "Access-Control-Allow-Origin": "*",
      },
    });

    this.socket.emit("userJoinedChat", { username });

    this.users = [];
    this.socket.on("roomUsers", (usersFromSocket) => {
      this.users = this.displayController.displayUsers(usersFromSocket);
    });

    this.socket.on("message", (message) => {
      console.log(message);
      this.displayController.displayMessage(message);
    });
  }

  static styles = [ChatContainerStyle, buttonStyle, sharedStyle, Fontawesome];

  get inputMessage() {
    return this.renderRoot?.querySelector("#msg") ?? null;
  }

  render() {
    return html`
      <div class="chat-container">
        <chat-header .this=${this} .socket=${this.socket} .myMessage=${this.myMessage} .this.myUsers=${this.myUsers}></chat-header>
        <main class="chat-main">
          <div class="chat-sidebar">
            <h3>Users</h3>
            <ul id="users">
              <li>${botName}</li>
              ${this.users.map((user) => html`<li>${user}</li>`)}
            </ul>
          </div>
          <div class="chat-messages"></div>
        </main>
        <div class="chat-form-container">
          <form
            id="chat-form"
            @submit="${this.messageSendingController.onSubmit}"
          >
            <input
              id="msg"
              type="text"
              placeholder="Enter Message"
              required
              autocomplete="off"
            />
            <button>
              <div class="sendButton btn" id="send-button">
                <i
                  class="fa fa-paper-plane send-not-hovered"
                  aria-hidden="true"
                ></i>
                <i
                  class="fa fa-paper-plane send-hovered"
                  aria-hidden="true"
                ></i>
                <p>Send</p>
              </div>
            </button>
          </form>
        </div>
      </div>
    `;
  }
}

window.customElements.define("chat-container", ChatContainer);
