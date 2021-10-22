import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import products from './products';

const ProductsList = (props) => (
  <>
    <h2>Список товаров</h2>
    <ul>
      {props.products.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  </>
);

const init = () => {
  const shownProductNum = 3;
  const shownProducts = products.filter((value, index) => index < shownProductNum);
  const container = document.getElementById('root');

  ReactDOM.render(
    <ProductsList
      products={shownProducts}
    />, container);
};

init();
