import commons from "../../../commons.json" assert { type: "json" };

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
    this.socket.emit(commons.events.message, "I want a magical joke!");
  }

  onSubmit(e) {
    e.preventDefault();
    const form = this.shadowRoot.querySelector("form");
    this.socket.emit(commons.events.message, this.inputMessage.value);
    form.reset();
  }
}
