/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import Header from './Components/Header/Header';
import Input from './Components/Input/Input';
import { container } from './Globalstyle';

function App() {
  const [showInput, setShowInput] = useState(false);
  return (
    <div css={container}>
      <Header onAdd={() => setShowInput(!showInput)} showAdd={showInput} />
      {showInput && <Input />}
    </div>
  );
}

export default App;
