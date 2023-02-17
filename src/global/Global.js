import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

export const GlobalCss = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Barlow', sans-serif;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    
    #root {
      width: 100%;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      gap: 10px;
    }

    a {
      color: ${({ theme }) => theme.accent};
      opacity: 0.9;
      transition: opacity .3s ease;
      font-size: 1rem;
      text-decoration: none;
    }

    a:hover {
      opacity: 1;
    }
  }

  ::selection {
    background-color:  ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accentContent};
  }
`;
