import { css } from "lit";

export default css`
  :host {
    animation: fadeIn;
    color: white;
    font-size: 35px;
    font-family: sans;
  }

  .header {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #head1,
  #head2,
  #head3 {
    opacity: 0;
    margin-top: 10%;
  }

  #head1 {
    animation: fadeOut 2s ease-in;
  }

  #head2 {
    animation: fadeOut 2s ease-in;
    animation-delay: 3s;
  }

  #head3 {
    animation: finalFade 2s ease-in;
    animation-fill-mode: forwards;
    animation-delay: 6s;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 0;
    }

    30% {
      opacity: 1;
    }

    80% {
      opacity: 0.9;
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes finalFade {
    0% {
      opacity: 0;
    }

    30% {
      opacity: 1;
    }

    80% {
      opacity: 0.9;
    }

    100% {
      opacity: 1;
    }
  }
`;
