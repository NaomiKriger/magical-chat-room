import { LitElement, html } from "lit";
import style from "./background-lights.css.js";

export class BackgroundLights extends LitElement {
  static properties = {
    className: { type: String },
    lights: { type: Array },
  };

  constructor() {
    super();

    this.className = "light";
    this.lights = Array.from({ length: 9 }, (_, i) => i + 1);
  }

  static styles = [style];

  render() {
    return html`
      ${this.lights.map(
        (i) => html`<div class="${this.className} ${this.className}${i}"></div>`
      )}
    `;
  }
}

window.customElements.define("background-lights", BackgroundLights);
