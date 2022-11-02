import { css } from "lit";

export default css`
  :host {
  }

  button:hover {
    cursor: pointer;
    border: none;
    /* fixes border issues of the send button */
  }

  .btn {
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
