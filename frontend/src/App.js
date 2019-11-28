import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Routes />
      </Main>

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
