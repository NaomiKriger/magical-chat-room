import { LitElement, html } from "lit";
import style from "./fading-text.css";

export class FadingText extends LitElement {
  static properties = {
    className: {},
    idName: {},
  };

  constructor() {
    super();
    this.className = "header";
    this.idName = "head";
  }

  static styles = [style];

  // TODO: retrieve the magical hat
  render() {
    return html`
      <p id="${this.idName}1" class=${this.className}>
        Welcome to the magical chat room
      </p>
      <p id="${this.idName}2" class=${this.className}>
        Prepare for a truely enchanting experience
      </p>
      <p id="${this.idName}3" class=${this.className}>
        Join us now <i class="fa-solid fa-hat-wizard"></i>
      </p>
    `;
  }
}

window.customElements.define("fading-text", FadingText);
