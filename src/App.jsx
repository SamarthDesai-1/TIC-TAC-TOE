import './App.css';
import UI from './Components/UI';
import { useState } from 'react';

function App() {

  const [grid, setGrid] = useState([[]]);


  return (
    <>
      <UI></UI>
    </>
  );
}

export default App;
