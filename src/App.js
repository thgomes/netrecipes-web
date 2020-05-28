import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { useSelector } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import { persistor } from './store';

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/global';

function App() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <ThemeProvider theme={theme}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </ThemeProvider>
  );
}

export default App;
