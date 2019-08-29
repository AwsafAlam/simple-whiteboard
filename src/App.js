import React from 'react';
// import ReactDOM from 'react-dom';
import WhiteBoard from './components/whiteBoard';
import Tools from './components/tools';
import History from './components/history';
import './App.css';

function App() {
  return (
    <div id='main'>
      <div id='container'>
        <Tools />
        <WhiteBoard />
      </div>
      <History />
    </div>
  );
}

export default App;
