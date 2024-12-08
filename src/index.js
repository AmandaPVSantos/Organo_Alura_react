import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //essa parte serve para a parte de desenvolvimento verificar se há algum erro,
  //mas em ambiente de produção não terá utilidade.
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);
