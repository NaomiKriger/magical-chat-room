import { css } from "lit";

export default css`
  .light {
    position: absolute;
    width: 0;
    opacity: 0.75;
    background-color: white;
    box-shadow: #e9f1f1 0px 0px 20px 2px;
    opacity: 0;
    top: 100vh;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  .light1 {
    animation: floatUp 4s infinite linear;
    transform: scale(1);
  }

  .light2 {
    animation: floatUp 7s infinite linear;
    transform: scale(1.6);
    left: 15%;
  }

  .light3 {
    animation: floatUp 2.5s infinite linear;
    transform: scale(0.5);
    left: -15%;
  }

  .light4 {
    animation: floatUp 4.5s infinite linear;
    transform: scale(1.2);
    left: -34%;
  }

  .light5 {
    animation: floatUp 8s infinite linear;
    transform: scale(2.2);
    left: -57%;
  }

  .light6 {
    animation: floatUp 3s infinite linear;
    transform: scale(0.8);
    left: -81%;
  }

  .light7 {
    animation: floatUp 5.3s infinite linear;
    transform: scale(3.2);
    left: 37%;
  }

  .light8 {
    animation: floatUp 4.7s infinite linear;
    transform: scale(1.7);
    left: 62%;
  }

  .light9 {
    animation: floatUp 4.1s infinite linear;
    transform: scale(0.9);
    left: 85%;
  }

  @keyframes floatUp {
    0% {
      top: 100vh;
      opacity: 0;
    }

    25% {
      opacity: 1;
    }

    50% {
      top: 0vh;
      opacity: 0.8;
    }

    75% {
      opacity: 1;
    }

    100% {
      top: -100vh;
      opacity: 0;
    }
  }
`;
