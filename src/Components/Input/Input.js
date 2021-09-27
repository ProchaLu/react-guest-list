/** @jsxImportSource @emotion/react */
import { inputForm, inputStyle } from './Input.style';

const Input = (props) => {
  return (
    <div css={inputForm}>
      <label htmlFor={props.htmlFor}>{props.text}</label>
      <input
        css={inputStyle}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
