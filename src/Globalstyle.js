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
  border-radius: 4px;
`;

export const blockButton = css`
  display: inline-block;
  background: #0074d9;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  width: 100%;
`;

export const inputCheck = css`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;

  label {
    flex: 1;
  }

  input {
    flex: 2;
    height: 20px;
  }
`;

export const guestListItems = css`
  margin: 16px;
  padding: 12px;
  background-color: #f4f4f4;
  border-radius: 4px;

  li {
    list-style: none;
    font-size: 20px;
  }
`;

export const faTimes = css`
  color: #ff4136;
  cursor: pointer;
  float: right;
  font-size: 24px;
`;

export const faEdit = css`
  color: #0074d9;
  float: right;
  margin-right: 16px;
  font-size: 24px;
  cursor: pointer;
`;

export const faCheck = css`
  color: #2ecc40;
  float: right;
  margin-right: 16px;
  font-size: 24px;
  cursor: pointer;
`;

export const checkBoxAttending = css`
  float: right;
  margin-right: 24px;
  cursor: pointer;
  -webkit-appearance: none; /*hides the default checkbox*/
  height: 24px;
  width: 24px;
  position: relative;
  transition: 0.1s;
  background-color: #fe0006;
  text-align: center;
  bottom: -1px;
  color: white;
  border-radius: 3px;
  outline: none;
  font-weight: 800;
  font-size: 16px;

  &:checked {
    background-color: #0e9700;
  }

  &:before {
    content: 'x';
  }
  &:checked:before {
    content: '✓';
  }
`;
