import commons from "../../../commons.json" assert { type: "json" };

export class DisplayController {
  host;

  constructor(host, renderRoot) {
    this.host = host;
    this.renderRoot = renderRoot;
    host.addController(this);
  }

  displayMessage(message) {
    const chatMessages = this.host.renderRoot?.querySelector(".chat-messages");

    const messageElement = document.createElement("div");
    if (message.username === `${commons.botIconAndName}`) {
      messageElement.classList.add("bot-message");
    } else {
      messageElement.classList.add("user-message");
    }
    messageElement.innerHTML = `<p class="meta">${message.username}<span>${message.time}</span></p>
      <p class="text">
      ${message.text}
      </p>`;

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  displayUsers(users) {
    let usersToDisplay = [];

    users.forEach((user) => {
      usersToDisplay.push(user.username);
    });

    return usersToDisplay;
  }
}
