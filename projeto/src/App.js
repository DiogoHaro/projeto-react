import React, {Component} from 'react';
import Header from './components/Header/Index';
import Main from './pages/main';
import  './styles.css';
import api from './services/api';

function App() {
  return (
    <div className="App">
     <Header/>
     <Main/>
    </div>
  );
}

export default App;
