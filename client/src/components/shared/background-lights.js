import { LitElement, html } from "lit";
import style from "./background-lights.css.js";

export class BackgroundLights extends LitElement {
  static properties = {
    className: {},
  };

  constructor() {
    super();

    this.className = "light";
  }

  static styles = [style];

  render() {
    return html`
      <div class="${this.className} ${this.className}1"></div>
      <div class="${this.className} ${this.className}2"></div>
      <div class="${this.className} ${this.className}3"></div>
      <div class="${this.className} ${this.className}4"></div>
      <div class="${this.className} ${this.className}5"></div>
      <div class="${this.className} ${this.className}6"></div>
      <div class="${this.className} ${this.className}7"></div>
      <div class="${this.className} ${this.className}8"></div>
      <div class="${this.className} ${this.className}9"></div>
    `;
  }
}

window.customElements.define("background-lights", BackgroundLights);
