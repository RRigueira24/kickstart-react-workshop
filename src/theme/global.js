import { css } from "@emotion/react";
import normalize from "emotion-normalize";

const globalStyles = css`
  ${normalize}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
  }

  b {
    font-weight: bold;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: 250ms;
  }

  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    background-attachment: fixed;
    overflow-x: hidden;
    font-size: 14;
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    cursor: default;
  }

  p {
    margin-bottom: 6px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  button {
    display: inline-block;
    border: none;
    padding: 0;
    margin: 0;
    text-decoration: none;
    background: white;
    font-family: sans-serif;
    font-size: 1rem;
    line-height: 1;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  button:hover,
  button:focus {
    background: white;
  }

  button:focus {
    outline: none;
  }

  button:active {
    transform: scale(0.99);
  }
`;

export { globalStyles };
