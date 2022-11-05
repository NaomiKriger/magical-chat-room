import { LitElement, html } from "lit";
import style from "../join-container/join-container.css";
import Fontawesome from "lit-fontawesome";
import { chatRoomName } from "../../../constants";

export class JoinHeader extends LitElement {

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
