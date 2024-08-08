import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './redux/store/store';
import axios from 'axios';

// axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.baseURL = "https://pi-videogames-main-2803.onrender.com";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
