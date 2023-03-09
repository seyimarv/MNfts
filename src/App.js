import { useState } from 'react';
import { Wrapper } from './App.styles';
import Header from './Components/Header';
import NftList from './Components/NftList';

function App() {
  const [searchBy, setSearchBy] = useState('contractAddress');
  return (
    <Wrapper>
      <Header searchBy={searchBy} setSearchBy={setSearchBy} />
      <NftList searchBy={searchBy} />
    </Wrapper>
  );
}

export default App;
