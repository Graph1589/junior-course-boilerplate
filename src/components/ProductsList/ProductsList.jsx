import React from 'react';
import { formatMoney } from 'csssr-school-utils';
import ProductItem from 'csssr-school-product-card';
import RatingStar from '../RatingStar';
import styled from './ProductsList.module.css';
import LogRender from '../LogRender/LogRender';

export default class ProductsList extends LogRender {
  render() {
    const { products } = this.props;

    const renderList = () => (
      products.map(({
        id, name, img, subPriceContent, isInStock, price, maxRating, rating,
      }) => (
        <li key={id} className={styled.itemWrapper}>
          <ProductItem
            isInStock={isInStock}
            img={img}
            title={name}
            price={(
              <span className={styled.price}>
                {`${formatMoney(price, 0, '.', ' ')} ₽`}
              </span>
            )}
            subPriceContent={<span className={styled.subPriceContent}>{subPriceContent}</span>}
            maxRating={maxRating}
            rating={rating}
            ratingComponent={RatingStar}
          />
        </li>
      ))
    );

    return (
      <ul className={styled.productsList}>{renderList()}</ul>
    );
  }
}
