/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const globalStyles = css`
  * {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0;
  }
`;

export const container = css`
  max-width: 800px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid black;
  padding: 30px;
  border-radius: 5px;
`;
