import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from 'csssr-school-product-card';
import RatingStar from '../RatingStar';
import styled from './ProductsList.module.css';

const ProductsList = ({ products }) => {
  const renderList = () => (
    products.map(({
      id, name, img, subPriceContent, isInStock, price, maxRating, rating,
    }) => (
      <div key={id} className={styled.itemWrapper}>
        <ProductItem
          isInStock={isInStock}
          img={img}
          title={name}
          price={<span className={styled.price}>{price}</span>}
          subPriceContent={<span className={styled.subPriceContent}>{subPriceContent}</span>}
          maxRating={maxRating}
          rating={rating}
          ratingComponent={RatingStar}
        />
      </div>
    ))
  );

  const list = renderList();

  return (
    <div className={styled.productsList}>{list.length === 0 ? 'Товары не найдены' : list}</div>
  );
};

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

ProductsList.defaultProps = {
  products: [],
};

export default ProductsList;
