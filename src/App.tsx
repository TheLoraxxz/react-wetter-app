import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Wetter from './components/Wetter/Wetter';

var test = "Hello World!";

function App() {
  return (
    <div className="App">
      {test}
      <Wetter city="Dresden" />
    </div>
  );
}

export default App;
