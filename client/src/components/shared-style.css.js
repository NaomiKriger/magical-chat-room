import { css } from "lit";

export default css`
  :host {
  }

  body {
    font-family: "Roboto", sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  h1:hover,
  h3:hover,
  li:hover,
  label:hover {
    color: black;
    transition: color 1s;
  }

  button:hover {
    border: none;
    /* fixes border issues of the send button */
  }

  .btn {
    padding: 5px 15px;
    background: #e6e9ff;
    color: #50394c;
    border: none;
    font-size: 17px;
  }

  .btn:hover {
    border: 2px solid #e6e9ff;
    background-color: #50394c;
    color: #e6e9ff;
    opacity: 0.8;
    transition: 0.5s;
  }
`;
