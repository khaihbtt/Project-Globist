import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Routercustom from './router';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routercustom />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
