import { css } from '@emotion/react';

export const globalStyles = css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

  body {
    display: flex;
    margin: 0;
    font-family: Montserrat, sans-serif;
    place-items: flex-start;
    width: 100%;
    overflow-x: hidden;
  }

  button {
    font-family: Montserrat, sans-serif;
    font-size: 16px;
  }

  h1 {
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, p {
    margin: 0;
  }

  #root {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 0;
    margin: 0;
    width: 100%;
  }
`;