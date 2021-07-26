import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --dark-yellow: #846219;
    --background-gray: #E9E9E9;
    --background-blue: #506FA9;
    --brown: #716565;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
  color: inherit;
  text-decoration: none;
  color: var(--dark-yellow);
}

  body, input, textarea, button {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    overflow-x: hidden;
  }

  html {
    @media (min-width: 1920px){
      font-size: 125%;
    }

    @media (max-width: 1280px) {
      font-size: 80%;
    }

    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  button {
    cursor: pointer;
  }
`;
