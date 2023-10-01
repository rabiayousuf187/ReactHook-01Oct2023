// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
const [color, setColor] = useState('red');

  return (
    <div className="App">
      <h1>Change Color via Hook {color}</h1>
      <button onClick={()=> setColor('red')} >Default</button>
      <button onClick={()=> setColor('pink')} >Pink</button>
      <button onClick={()=> setColor('blue')} >Blue</button>
      <button onClick={()=> setColor('yellow')} >Yellow</button>
    </div>
  );
}

export default App;
