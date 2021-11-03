import React from 'react';
import LogRender from '../LogRender/LogRender';
import ProductFilter from '../ProductFilter/ProductFilter';

export default class LogFilter extends LogRender {
  render() {
    const { setFilter, filter } = this.props;
    return (
      <ProductFilter
        setFilter={setFilter}
        filter={filter}
      />
    );
  }
}
