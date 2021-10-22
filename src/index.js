import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import products from './products';

const ProductsList = ({ products }) => (
    <>
    <h2>Список товаров</h2>
    {products.map(({ id, name }) => (
      <li key={id}>{name}</li>
    ))}
    </>
);

const init = () => {
  console.log(products);
const shownProductNum = 3;
const shownProducts = products.filter((value, index) => index < shownProductNum);
const container = document.getElementById('root');

ReactDOM.render(
<ProductsList
  products={shownProducts}
  />, container);
};

init();
