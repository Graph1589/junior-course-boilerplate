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
    },
  };

  const [filter, setFilter] = useState(initState.filter);

  return (
    <>
      <ProductsHeader />
      <LogFilter
        defaultMinPrice={defaultMinPrice}
        defaultMaxPrice={defaultMaxPrice}
        setFilter={setFilter}
      />
      <ProductsList
        products={products}
        filter={filter}
      />
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
