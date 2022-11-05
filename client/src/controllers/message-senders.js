export class MessageSendingController {
  host;

  constructor(host, socket, shadowRoot, inputMessage) {
    this.host = host;
    this.socket = socket;
    this.shadowRoot = shadowRoot;
    this.inputMessage = inputMessage;
    host.addController(this);
  }

  onJokeAsked() {
    this.socket.emit("message", "I want a magical joke!");
  }

  onSubmit(e) {
    e.preventDefault();
    const form = this.shadowRoot.querySelector("form");
    this.socket.emit("message", this.inputMessage.value);
    form.reset();
  }
}
