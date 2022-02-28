import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { BigContextProvider } from './context/context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BigContextProvider>
        <App />
      </BigContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


