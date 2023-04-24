import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    color: inherit;
    font-family: inherit;
  }

  html {
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: #111111;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: #E2B65C;
      border-radius: 2px;
    }
  }

  body,
  #__next {
    margin: 0;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background-color: #F4F4F4;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
