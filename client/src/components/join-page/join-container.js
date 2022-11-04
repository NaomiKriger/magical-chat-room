import { LitElement, html } from "lit";
import style from "./style/join-container.css.js";
import "./join-chat-form";
import "./join-header";

export class JoinContainer extends LitElement {
  static properties = {};

  constructor() {
    super();
  }

  static styles = [style];

  render() {
    return html`
      <div class="join-container">
        <join-header></join-header>
        <main class="join-main">
          <join-chat-form><join-chat-form/>
        </main>
      </div>
    `;
  }
}

window.customElements.define("join-container", JoinContainer);
