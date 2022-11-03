import { css } from "lit";

export default css`
  .stay {
    visibility: hidden;
  }

  .hiddenText:hover .stay {
    position: relative;
    visibility: visible;
    border-radius: 6px;
    color: #50394c;
    background: #e6e9ff;
    padding: 10px;
  }
`;
