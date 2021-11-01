/* eslint react/jsx-filename-extension: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import products from './products.json';
import ProductsList from './components/ProductsList/ProductsList';
import ProductFilter from './components/ProductFilter/ProductFilter';
import ProductsHeader from './components/ProductsHeader/ProductsHeader';

const init = () => {
  const container = document.getElementById('root');

  ReactDOM.render(
    <>
      <ProductsHeader />
      <ProductFilter />
      <ProductsList
        products={products}
      />
    </>, container,
  );
};

init();
