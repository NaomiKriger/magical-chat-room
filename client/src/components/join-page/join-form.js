import { LitElement, html } from "lit";
import style from "./join-container.css.js";
import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
import "./join-chat-button";

export class JoinForm extends LitElement {
  static get properties() {
    return {};
  }

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
      <main class="join-main">
        <form action="chat.html">
          <div class="form-control">
            <label for="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Magical username here"
              required
            />
          </div>
          <join-chat-button><join-chat-button/>
        </form>
      </main>
    `;
  }
}

window.customElements.define("join-form", JoinForm);
