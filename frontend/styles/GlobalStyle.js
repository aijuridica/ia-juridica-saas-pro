import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', Arial, sans-serif;
    background-color: #f9fafb;
    color: #212529;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    color: #1a1a1a;
  }

  p {
    font-weight: 400;
    line-height: 1.6;
    color: #4a4a4a;
  }

  a {
    color: #0056d2;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    font-family: 'Inter', Arial, sans-serif;
    background-color: #0056d2;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 12px 24px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #003f9e;
    }
  }
`;

export default GlobalStyle;
