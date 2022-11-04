import { css } from "lit";

export default css`
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

  h1:hover,
  label:hover {
    color: black;
    transition: color 1s;
  }

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
`;
