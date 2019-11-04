import React, {Component} from 'react';
import Header from './components/Header/Index';
import Main from './pages/main';
import  './styles.css';

import Routes from './routes';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes/>
    </div>
  );
}

export default App;
