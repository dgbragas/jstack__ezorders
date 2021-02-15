import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
  }

  body {
    background: #eee;
    color: #0a100D;
    font-family: 'Roboto', sans-serif;
  }
`;
