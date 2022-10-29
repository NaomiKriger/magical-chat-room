import { LitElement, html } from "lit";
import style from "./join-container.css.js";
import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";

export class JoinContainer extends LitElement {
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
      <div class="join-container">
        <header class="join-header">
          <h1>
            Magical Chat Room <i class="fa fa-magic" aria-hidden="true"></i>
          </h1>
        </header>
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
            <button type="submit" class="btn">
              Join Chat <i class="fa-solid fa-hat-wizard"></i>
            </button>
          </form>
        </main>
      </div>
    `;
  }
}

window.customElements.define("join-container", JoinContainer);
