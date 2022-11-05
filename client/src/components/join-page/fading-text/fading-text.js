import { LitElement, html } from "lit";
import style from "./fading-text.css";

export class FadingText extends LitElement {
  static properties = {
    className: { type: String },
    idName: { type: String },
  };

  static styles = [style];

  constructor() {
    super();
    this.className = "header";
    this.idName = "head";
  }

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap"
      />
      <p id="${this.idName}1" class=${this.className}>
        Welcome to the magical chat room
      </p>
      <p id="${this.idName}2" class=${this.className}>
        Prepare for a truely enchanting experience
      </p>
      <p id="${this.idName}3" class=${this.className}>Join us now</p>
    `;
  }
}

window.customElements.define("fading-text", FadingText);
