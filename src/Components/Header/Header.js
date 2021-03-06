/** @jsxImportSource @emotion/react */

import HeaderButton from '../HeaderButton/HeaderButton';
import { header } from './Header.style';

const Header = ({ showAdd, onAdd }) => {
  return (
    <div css={header}>
      <h1>guest list</h1>
      <HeaderButton
        color={showAdd ? '#FF4136' : '#0074d9'}
        text={showAdd ? 'CLOSE' : 'ADD'}
        onClick={onAdd}
      />
    </div>
  );
};

export default Header;
