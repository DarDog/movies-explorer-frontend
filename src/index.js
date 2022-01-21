import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './components/App/App';
import { CurrentUserProvider } from "./context/CurrentUserProvider";

ReactDOM.render(
  <React.StrictMode>
    <CurrentUserProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </CurrentUserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
