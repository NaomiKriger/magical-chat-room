import { LitElement, html } from "lit";
import style from "./join-container.css.js";
import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";

export class JoinChatButton extends LitElement {
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
      <button type="submit" class="btn">
        Join Chat <i class="fa-solid fa-hat-wizard"></i>
      </button>
    `;
  }
}

window.customElements.define("join-chat-button", JoinChatButton);
