import React from 'react';
import LogRender from '../LogRender/LogRender';
import ProductFilter from '../ProductFilter/ProductFilter';

export default class LogFilter extends LogRender {
  render() {
    const { setFilter, defaultMinPrice, defaultMaxPrice } = this.props;
    return (
      <ProductFilter
        setFilter={setFilter}
        defaultMinPrice={defaultMinPrice}
        defaultMaxPrice={defaultMaxPrice}
      />
    );
  }
}
