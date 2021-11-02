/* eslint react/jsx-filename-extension: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import products from './products.json';
import App from './App';

const init = () => {
  const container = document.getElementById('root');

  ReactDOM.render(
    <App
      products={products}
    />, container,
  );
};

init();
