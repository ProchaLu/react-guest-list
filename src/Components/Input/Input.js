import PropTypes from 'prop-types';
/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { blockButton, inputCheck, inputForm, inputStyle } from './Input.style';

const Input = (onAdd) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [attending, setAttending] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!firstName || !lastName) {
      alert('PLEASE ENTER NAME');
      return;
    }
    onAdd({ firstName, lastName, attending });

    setFirstName('');
    setLastName('');
    setAttending(false);
  };

  const onChangeFirstName = (event) => {
    setFirstName(event.currentTarget.value);
  };

  const onChangeLastName = (event) => {
    setLastName(event.currentTarget.value);
  };

  const onChangeAttending = (event) => {
    setAttending(event.currentTarget.checked);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <form css={inputForm}>First Name</form>
        <input
          css={inputStyle}
          placeholder="First Name"
          value={firstName}
          onChange={onChangeFirstName}
        />
        <form css={inputForm}>Last Name</form>
        <input
          css={inputStyle}
          placeholder="Last Name"
          value={lastName}
          onChange={onChangeLastName}
        />
        <div css={inputCheck}>
          <form>Attending</form>
          <input
            type="checkbox"
            checked={attending}
            value={attending}
            onChange={onChangeAttending}
          />
        </div>
        <button css={blockButton}>SAVE</button>
      </form>
    </div>
  );
};

Input.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}.isRequired;

export default Input;
