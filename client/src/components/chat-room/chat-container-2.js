import { LitElement, html } from "lit";
import style from "./chat-container.css";

export class ChatContainer extends LitElement {
  static properties = {
    className: {},
  };

  constructor() {
    super();
  }

  static styles = [style];

  // TODO: retrieve the magical hat
  render() {
    return html`
      <div class="chat-container">
        <header class="chat-header">
          <h1>
            Magical Chat Room <i class="fa fa-magic" aria-hidden="true"></i>
          </h1>
          <button class="btn" id="joke">
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
          <form id="chat-form">
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
