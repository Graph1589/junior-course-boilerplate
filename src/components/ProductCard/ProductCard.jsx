/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ProductItem from 'csssr-school-product-card';

// Bug, freeze app, if ProductCard extend LogRender.
export default class ProductCard extends React.PureComponent {
  render() {
    return (
      <ProductItem {...this.props} />
    );
  }
}
