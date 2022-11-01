import { LitElement, html } from "lit";
import style from "./chat-container.css";
import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";

const { username } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

// const chatForm = document.getElementById("chat-form");
// const chatMessages = document.querySelector(".chat-messages");

// function displayUsersList(users) {
  // console.log(`users in displayUsersList --->>> ${users}`);
  // userList.innerHTML = "";
  // users.forEach((user) => {
  //   const li = document.createElement("li");
  //   li.innerHTML = `<i class="fa-solid fa-hat-wizard"></i> ${user.username}`;
  //   userList.appendChild(li);
  // });
// }

// function displayMessage(message) {
//   const div = document.createElement("div");
//   if (message.username == "The Magical Bot") {
//     div.classList.add("bot-message");
//   } else {
//     div.classList.add("user-message");
//   }
//   div.innerHTML = `<p class="meta">${message.username}<span>${message.time}</span></p>
//   <p class="text">
//   ${message.text}
//   </p>`;
//   chatMessages.appendChild(div);
// }

export class ChatContainer extends LitElement {

  static properties = {
    temp: {},
    listUsers: {},
    _listItems: {},
  };


  // static get properties() {
  //   return {
  //     /**
  //      * The name to say "Hello" to.
  //      * @type {string}
  //      */
  //     name: { type: String },

  //     /**
  //      * The number of times the button has been clicked.
  //      * @type {number}
  //      */
  //     count: { type: Number },
  //   };
  // }

  constructor() {
    super();
    this.socket = io("http://localhost:3000", {
      extraHeaders: {
        "Access-Control-Allow-Origin": "*",
      },
    });

    this._listItems = [];

    this.socket.emit("joinChat", { username });

    var usersList = [];
    this.socket.on("roomUsers", (users) => {
      for (let i = 0; i < users["users"].length; i++) {
        let obj = users["users"][i];
        usersList.push(obj.username);
      }
      console.log(usersList);
      this._listItems = usersList;

      // displayUsersList(usersList);
      usersList = [];
    });

    this.socket.on("message", (message) => {
      console.log(message);
      // displayMessage(message);

      // chatMessages.scrollTop = chatMessages.scrollHeight;
    });
  }

  static styles = [style];

  get inputMessage() {
    return this.renderRoot?.querySelector("#msg") ?? null;
  }

  // get users() {
  //   console.log(this.renderRoot?.querySelector("#users") ?? null);
  //   return this.renderRoot?.querySelector("#users") ?? null;
  // }

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

  // TODO: retrieve the magical hat
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

          <div class="hiddenText">
            <span class="stay">Stay!</span>
            <a href="index.html" button class="btn"
              >Leave Room <i class="fa-solid fa-person-walking"></i
            ></a>
          </div>
        </header>
        <main class="chat-main">
          <div class="chat-sidebar">
            <h3>Users</h3>
            <ul id="users">
            ${this._listItems.map((item) =>
              html`<li>${item}</li>`
            )}
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
