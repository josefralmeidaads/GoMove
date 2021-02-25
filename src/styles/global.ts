import {  createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    @media(max-width: 1080px){
      html {
        font-size: 93.75%;
      }
    }

    @media(max-width: 720px){
      html {
        font-size: 87.5%;
      }
    }

    body {
        color: ${props => props.theme.colors.text};
        background: ${props => props.theme.colors.background};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
      font-family: 'Inter', serif;
      font-size: 1rem;
    }

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 500;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    button {
      cursor: pointer;
    }
`;