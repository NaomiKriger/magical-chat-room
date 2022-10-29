import { LitElement, html } from "lit";
import style from "../components/chat-room/chat-container.css.js";
import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";

/**
 * An example element.
 */

const { username } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});
console.log(username);

// function displayUsersList(users) {
//   userList.innerHTML = "";
//   users.forEach((user) => {
//     const li = document.createElement("li");
//     li.innerHTML = `<i class="fa-solid fa-hat-wizard"></i> ${user.username}`;
//     userList.appendChild(li);
//   });
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

export class DemoChatElement extends LitElement {
  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       * @type {string}
       */
      name: { type: String },

      /**
       * The number of times the button has been clicked.
       * @type {number}
       */
      count: { type: Number },
    };
  }

  constructor() {
    super();
    this.name = "Bot";
    this.count = 0;
    this.value = "";
    this.socket = io("http://localhost:3000", {
      extraHeaders: {
        "Access-Control-Allow-Origin": "*",
      },
    });

    this.socket.emit("message", "hi");

    this.socket.emit("joinChat", { username });

    this.socket.on("new connection", console.log);

    // this.socket.on("roomUsers", ({ users }) => {
    //   displayUsersList(users);
    // });

    // this.socket.on("message", (message) => {
    //   displayMessage(message);

    //   chatMessages.scrollTop = chatMessages.scrollHeight;
    // });
  }

  static styles = [style];

  onButtonClick() {
    this.count++;
  }

  onChange() {
    this.value = e.target.value;
    console.log(this.value);
  }

  onSubmit(e) {
    e.preventDefault();
    const form = this.shadowRoot.querySelector("form");

    this.socket.emit("message", "hi there!");

    // const data = new FormData(form);
    // for (const [name,value] of data) {
    //   console.log(name, ":", value)
    // }

    console.log(
      `e.target.value = ${e.target.value}, form.target.value=${form.target}`
    ); // successfully logs <form> element
    window.setTimeout(() => {
      console.log(form); // successfully logs <form> element
      form.reset(); // resets form
    }, 2000);

    // e.preventDefault();
    // const form = this.shadowRoot.querySelector("form");
    // console.log(e.target, form);

    // console.log(e);
    // console.log("onSubmit runs");
    // // const msg = e.target.elements.msg.value;

    // // this.socket.emit("message", msg);

    // form.reset();
    // // e.target.elements.msg.value = "";
  }

  onJokeAsked() {
    this.socket.emit("message", "I want a magical joke!");
  }

  render() {
    const { name, count } = this;
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
            <ul id="users"></ul>
          </div>
          <div class="chat-messages"></div>
        </main>
        <div class="chat-form-container">
          <form id="chat-form" @submit="${this.onSubmit}">
            <input
              id="msg"
              @onBlur="${this.onChange}"
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
      <button @click="${this.onButtonClick}">Number of clicks: ${count}</button>
    `;
  }
}

window.customElements.define("demo-chat-element", DemoChatElement);