import { css } from "lit";

export default css`
  :host {
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .join-container {
    max-width: 500px;
    margin: 80px auto;
    color: #fff;
  }

  /* BOILER PLATE START */

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

  h1:hover,
  h3:hover,
  li:hover,
  label:hover {
    color: black;
    transition: color 1s;
  }

  /* BOILER PLATE END */

  .join-header {
    text-align: center;
    padding: 20px;
    background: #50394c;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .join-main {
    padding: 30px 40px;
    background: #614c5d;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .join-main p {
    margin-bottom: 20px;
  }

  .join-main .form-control {
    margin-bottom: 20px;
  }

  .join-main label {
    display: block;
    margin-bottom: 5px;
  }

  .join-main input[type="text"] {
    font-size: 16px;
    padding: 5px;
    height: 40px;
    width: 100%;
  }

  .join-main .btn {
    margin-top: 20px;
    width: 100%;
    cursor: pointer;
  }
`;
