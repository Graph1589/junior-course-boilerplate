/* eslint react/jsx-filename-extension: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import products from './products.json';
import ProductsList from './components/ProductsList/ProductsList';

const init = () => {
  const container = document.getElementById('root');

  ReactDOM.render(
    <ProductsList
      products={products}
    />, container,
  );
};

init();
