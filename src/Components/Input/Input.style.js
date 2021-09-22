/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const inputStyle = css`
  width: 100%;
  height: 40px;
  margin: 8px;
  margin-bottom: 16px;
  padding: 4px 8px;
  font-size: 16px;
`;

export const inputForm = css`
  display: block;
  font-size: 20px;
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
