/** @jsxImportSource @emotion/react */

import HeaderButton from '../HeaderButton/HeaderButton';
import { header } from './Header.style';

const Header = ({ showAdd, onAdd }) => {
  return (
    <div css={header}>
      <h1>guest list</h1>
      <HeaderButton
        color={showAdd ? 'red' : '#0074d9'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />
    </div>
  );
};

export default Header;
