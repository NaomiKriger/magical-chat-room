import { LitElement, html } from "lit";
import style from "./fading-text.css";

export class FadingText extends LitElement {
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
      <p id="head1" class="header">Welcome to the magical chat room</p>
      <p id="head2" class="header">
        Prepare for a truely enchanting experience
      </p>
      <p id="head3" class="header">
        Join us now <i class="fa-solid fa-hat-wizard"></i>
      </p>
    `;
  }
}

window.customElements.define("fading-text", FadingText);
