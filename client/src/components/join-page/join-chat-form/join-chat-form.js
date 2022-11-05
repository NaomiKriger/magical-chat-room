import { LitElement, html } from "lit";
import joinContainerStyle from "../join-container/join-container.css.js";
import formStyle from "./join-chat-form.css.js";
import buttonStyle from "../../../styles/button-style.css";

export class JoinChatForm extends LitElement {
  static properties = {
    username: { type: String },
    pattern: { type: String },
  };

  static styles = [joinContainerStyle, formStyle, buttonStyle];

  constructor() {
    super();
    this.username = "username";
    this.pattern = "[A-Za-z]{2,}";
  }

  render() {
    return html`
      <form action="chat.html">
        <div class="form-control">
          <label for=${this.username}>Username</label>
          <input
            type="text"
            name=${this.username}
            id=${this.username}
            placeholder="Magical username here"
            required
            pattern=${this.pattern}
            title="Username should be alphabetic and at least two characters"
          />
        </div>
        <button type="submit" class="btn">Join Chat</button>
      </form>
    `;
  }
}

window.customElements.define("join-chat-form", JoinChatForm);
