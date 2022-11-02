import { LitElement, html } from "lit";
import style from "./join-container.css.js";
import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
import sharedStyle from "../shared/shared-style.css";
import Fontawesome from "lit-fontawesome";
import "./join-chat-form";
import { chatRoomName } from "../shared/constants.js";

export class JoinContainer extends LitElement {
  static properties = {};

  constructor() {
    super();
    this.socket = io("http://localhost:3000", {
      extraHeaders: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  static styles = [style, sharedStyle, Fontawesome];

  render() {
    return html`
      <div class="join-container">
        <header class="join-header">
          <h1>
            ${chatRoomName} <i class="fa fa-magic" aria-hidden="true"></i>
          </h1>
        </header>
        <main class="join-main">
          <join-chat-form><join-chat-form/>
        </main>
      </div>
    `;
  }
}

window.customElements.define("join-container", JoinContainer);
