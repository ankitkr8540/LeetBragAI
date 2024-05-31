import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const root = document.getElementById('root') || document.createElement('div');

if (!document.getElementById('root')) {
  root.id = 'root';
  root.class = "body";
  document.body.appendChild(root);
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  root
);

reportWebVitals();