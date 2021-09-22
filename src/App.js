/** @jsxImportSource @emotion/react */

import Header from './Components/Header/Header';
import Input from './Components/Input/Input';
import { container } from './Globalstyle';

function App() {
  return (
    <div css={container}>
      <Header />
      <Input />
    </div>
  );
}

export default App;
