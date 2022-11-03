import { LitElement, html } from "lit";
import style from "./join-container.css.js";
import formStyle from "./join-chat-form.css.js";
import buttonStyle from "../shared/button-style.css";

export class JoinChatForm extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  static styles = [style, formStyle, buttonStyle];

  render() {
    return html`
      <form action="chat.html">
        <div class="form-control">
          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Magical username here"
            required
            pattern="[A-Za-z]{2,}"
            title="Username should be alphabetic and at least two characters"
          />
        </div>
        <button type="submit" class="btn">
          Join Chat <i class="fa-solid fa-hat-wizard"></i>
        </button>
      </form>
    `;
  }
}

window.customElements.define("join-chat-form", JoinChatForm);
