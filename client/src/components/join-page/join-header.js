import { LitElement, html } from "lit";
import style from "./style/join-container.css.js";
import Fontawesome from "lit-fontawesome";
import { chatRoomName } from "../shared/constants.js";

export class JoinHeader extends LitElement {
  static properties = {};

  constructor() {
    super();
  }

  static styles = [style, Fontawesome];

  render() {
    return html`
      <header class="join-header">
        <h1>${chatRoomName} <i class="fa fa-magic" aria-hidden="true"></i></h1>
      </header>
    `;
  }
}

window.customElements.define("join-header", JoinHeader);
