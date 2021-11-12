import React from 'react';
import * as _ from 'lodash';
import { formatMoney } from 'csssr-school-utils';
import ProductCard from '../ProductCard/ProductCard';
import RatingStar from '../RatingStar';
import styled from './ProductsList.module.css';
import LogRender from '../LogRender/LogRender';

// export default class ProductsList extends LogRender {
class ProductsList extends LogRender {
  render() {
    const { products } = this.props;

    const renderList = () => (
      products.map(({
        id, name, img, discount, isInStock, price, maxRating, rating,
      }) => (
        <li key={id} className={styled.itemWrapper}>
          <ProductCard
            key={id}
            isInStock={isInStock}
            img={img}
            title={name}
            price={(
              <span className={styled.price}>
                {`${formatMoney(price, 0, '.', ' ')} ₽`}
              </span>
            )}
            subPriceContent={(
              <span className={styled.subPriceContent}>
                {`- ${discount} %`}
              </span>
            )}
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

const areEqual = (props, nextProps) => {
  const productsIds = props.products.map((product) => product.id);
  const nextProductsIds = nextProps.products.map((product) => product.id);
  return _.isEqual(productsIds, nextProductsIds);
};

export default React.memo(ProductsList, areEqual);
