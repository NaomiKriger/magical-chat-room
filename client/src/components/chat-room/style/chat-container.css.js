import { css } from "lit";

export default css`
  :host {
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  h3:hover,
  li:hover {
    color: black;
    transition: color 1s;
  }

  /* CHAT PAGE */

  .chat-container {
    max-width: 1100px;
    height: 500px;
    background: #fff;
    margin: 30px auto;
  }

  .chat-header {
    background: #50394c;
    color: #fff;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .chat-main {
    height: 355px;
    display: grid;
    grid-template-columns: 1fr 3fr;
  }

  .chat-sidebar {
    background: #614c5d;
    color: #fff;
    padding: 20px 20px 60px;
    overflow-y: scroll;
  }

  .chat-sidebar h2 {
    font-size: 20px;
    background: rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-bottom: 20px;
  }

  .chat-sidebar h3 {
    margin-bottom: 15px;
  }

  .chat-sidebar ul li {
    padding: 10px 0;
  }

  .chat-messages {
    padding: 30px;
    max-height: 500px;
    overflow-y: scroll;
  }

  .chat-messages .bot-message {
    background-color: #bdb5d5;
  }

  .chat-messages .user-message {
    background-color: #e6e9ff;
  }

  .chat-messages .bot-message,
  .chat-messages .user-message {
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
  }

  .chat-messages .bot-message .meta,
  .chat-messages .user-message .meta {
    font-size: 15px;
    font-weight: bold;
    opacity: 0.7;
    margin-bottom: 7px;
  }

  .chat-messages .bot-message .meta {
    color: #202020;
  }

  .chat-messages .user-message .meta {
    color: #50394c;
  }

  .chat-messages .bot-message .meta span,
  .chat-messages .user-message .meta span {
    color: #474747;
  }

  .chat-form-container {
    padding: 20px 30px;
    background-color: #50394c;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .chat-form-container form {
    justify-content: space-between;
    display: flex;
    width: 100%;
  }

  .chat-form-container input[type="text"] {
    font-size: 16px;
    padding: 5px;
    height: 40px;
    flex: 1;
  }

  .botTex {
    display: flex;
  }

  .botTex span {
    display: inline-block;
  }

  button:hover {
    border: none;
    /* fixes border issues of the send button */
  }

  .btn {
    padding: 5px 15px;
  }

  /*  MOVING SEND BUTTON  */

  .sendButton {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 36px;
    width: 200px;
    padding: 18px;
    overflow: hidden;
  }

  .sendButton p {
    bottom: 5px;
    position: relative;
    text-align: center;
    transition: 0.5s;
  }

  .send-not-hovered {
    position: absolute;
    top: 15px;
    left: 30px;
    color: #50394c;
    transition: 0.5s;
  }

  .send-hovered {
    position: absolute;
    top: 80px;
    left: 30px;
    color: #e6e9ff;
    transition: 0.5s;
  }

  .sendButton:hover {
    transition: 0.5s;
    opacity: 1;
  }

  .sendButton:hover p {
    transition: 0.5s;
    animation: move 1s linear 1s;
  }

  .sendButton:hover .send-not-hovered {
    top: -50px;
    transition: 0.5s;
  }

  .sendButton:hover .send-hovered {
    height: 36px;
    top: 15px;
    transition: 0.5s;
    animation: sending 1s linear 1s;
  }

  @keyframes sending {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translate(40px, -60px);
    }
  }

  @keyframes move {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-18px);
    }
  }
`;
