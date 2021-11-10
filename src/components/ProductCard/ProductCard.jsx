/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ProductItem from 'csssr-school-product-card';
import LogRender from '../LogRender/LogRender';

export default class ProductCard extends LogRender {
  render() {
    return (
      <ProductItem {...this.props} />
    );
  }
}
