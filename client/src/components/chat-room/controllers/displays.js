import { botIconAndName } from "../../shared/constants.js";

export class DisplayController {
  host;

  constructor(host, renderRoot) {
    this.host = host;
    this.renderRoot = renderRoot;
    host.addController(this);
  }

  displayMessage(message) {
    const chatMessages =
      this.host.renderRoot?.querySelector(".chat-messages") ?? null;

    const div = document.createElement("div");
    if (message.username == `${botIconAndName}`) {
      div.classList.add("bot-message");
    } else {
      div.classList.add("user-message");
    }
    div.innerHTML = `<p class="meta">${message.username}<span>${message.time}</span></p>
      <p class="text">
      ${message.text}
      </p>`;

    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  displayUsers(users) {
    var usersToDisplay = [];
    for (let i = 0; i < users["users"].length; i++) {
      let user = users["users"][i];
      usersToDisplay.push(user.username);
    }
    return usersToDisplay;
  }
}
