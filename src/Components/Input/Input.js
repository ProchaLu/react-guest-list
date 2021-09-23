/** @jsxImportSource @emotion/react */
import { inputForm, inputStyle } from './Input.style';

const Input = (props) => {
  return (
    <div>
      <form css={inputForm}>
        <label htmlFor={props.htmlFor}>{props.text}</label>
        <input
          css={inputStyle}
          type={props.type}
          id={props.id}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </form>
    </div>
  );
};

export default Input;
