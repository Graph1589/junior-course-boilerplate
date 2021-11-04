import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { minBy, maxBy } from 'csssr-school-utils';
import ProductsList from './components/ProductsList/ProductsList';
import ProductsHeader from './components/ProductsHeader/ProductsHeader';
import LogFilter from './components/LogFilter/LogFilter';

const App = ({ products }) => {
  const prices = products.map((item) => item.price);
  const defaultMinPrice = minBy((price) => price, prices);
  const defaultMaxPrice = maxBy((price) => price, prices);

  const initState = {
    filter: {
      minPrice: null,
      maxPrice: null,
      defaultMinPrice,
      defaultMaxPrice,
    },
  };

  const [filter, setFilter] = useState(initState.filter);

  const { minPrice, maxPrice } = filter;
  const filteredProducts = products
    .filter(({ price }) => (!minPrice || (price >= minPrice))
      && (!maxPrice || (price <= maxPrice)));

  return (
    <>
      <ProductsHeader />
      <LogFilter
        setFilter={setFilter}
        filter={filter}
      />
      {
        filteredProducts.length === 0
          ? 'Товары не найдены'
          : <ProductsList products={filteredProducts} />
      }
    </>
  );
};

App.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

App.defaultProps = {
  products: [],
};

export default App;
