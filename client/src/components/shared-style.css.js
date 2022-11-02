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
`;
