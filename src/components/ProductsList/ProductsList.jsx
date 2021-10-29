import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from 'csssr-school-product-card';
import ProductsHeader from '../ProductsHeader/ProductsHeader';
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
          price={price}
          subPriceContent={subPriceContent}
          maxRating={maxRating}
          rating={rating}
          ratingComponent={RatingStar}
        />
      </div>
    ))
  );

  return (
    <>
      <ProductsHeader />
      <ul className={styled.productsList}>{renderList()}</ul>
    </>
  );
};

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

ProductsList.defaultProps = {
  products: [],
};

export default ProductsList;
