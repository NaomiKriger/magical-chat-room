import { LitElement, html } from "lit";
import style from "./chat-container.css";
import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
import "./leave-room";

const { username } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

export class ChatContainer extends LitElement {
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

    this.socket.emit("joinChat", { username });

    this._users = [];
    this.socket.on("roomUsers", (usersFromSocket) => {
      this._users = this.displayUsers(usersFromSocket);
    });

    this.socket.on("message", (message) => {
      console.log(message);
      this.displayMessage(message);
    });
  }

  static styles = [style];

  displayMessage(message) {
    const chatMessages =
      this.renderRoot?.querySelector(".chat-messages") ?? null;

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
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  displayUsers(users) {
    var usersToDisplay = [];
    for (let i = 0; i < users["users"].length; i++) {
      let user = users["users"][i];
      usersToDisplay.push(user.username);
    }
    console.log(usersToDisplay);
    return usersToDisplay;
  }

  get inputMessage() {
    return this.renderRoot?.querySelector("#msg") ?? null;
  }

  onSubmit(e) {
    e.preventDefault();
    const form = this.shadowRoot.querySelector("form");
    console.log(this.inputMessage.value);
    this.socket.emit("message", this.inputMessage.value);
    form.reset();
  }

  onJokeAsked() {
    this.socket.emit("message", "I want a magical joke!");
  }

  render() {
    return html`
      <div class="chat-container">
        <header class="chat-header">
          <h1>
            Magical Chat Room <i class="fa fa-magic" aria-hidden="true"></i>
          </h1>
          <button class="btn" id="joke" @click="${this.onJokeAsked}">
            I want a magical joke! <i class="fa-regular fa-face-laugh-beam"></i>
          </button>
          <leave-room><leave-room/>
        </header>
        <main class="chat-main">
          <div class="chat-sidebar">
            <h3>Users</h3>
            <ul id="users">
              ${this._users.map((user) => html`<li>${user}</li>`)}
            </ul>
          </div>
          <div class="chat-messages"></div>
        </main>
        <div class="chat-form-container">
          <form id="chat-form" @submit="${this.onSubmit}">
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
