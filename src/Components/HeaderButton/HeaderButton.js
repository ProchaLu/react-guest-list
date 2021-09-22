/** @jsxImportSource @emotion/react */

import { headerButton } from './HeaderButton.style';

const HeaderButton = ({ color, text, onClick }) => {
  return (
    <button
      css={headerButton}
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

export default HeaderButton;
