import React from 'react';
import styled from './ProductsHeader.module.css';
import LogRender from '../LogRender/LogRender';

class ProductsHeader extends LogRender {
  render() {
    return (
      <div className={styled.productsHeader}>
        Список Tоваров
      </div>
    );
  }
}

export default ProductsHeader;
