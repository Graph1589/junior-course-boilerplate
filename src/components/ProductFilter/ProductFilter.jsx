import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from './ProductFilter.module.css';

const ProductFilter = ({ setFilter, defaultMinPrice, defaultMaxPrice }) => {
  const inputMinPrice = useRef(null);
  const inputMaxPrice = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const minPrice = +inputMinPrice.current.value;
    const maxPrice = +inputMaxPrice.current.value;
    setFilter({
      minPrice: minPrice < 0 ? null : minPrice,
      maxPrice: maxPrice < 0 ? null : maxPrice,
    });
  };

  return (
    <div className={styled.filter}>
      <form onSubmit={handleSubmit}>
        <div className={styled.title}>
          <b>Цена</b>
        </div>
        <div className={styled.inputContainer}>
          <b>От</b>
          <input ref={inputMinPrice} name="minPrice" className={styled.input} type="number" placeholder={defaultMinPrice} />
          <b>До</b>
          <input ref={inputMaxPrice} name="maxPrice" className={styled.input} type="number" placeholder={defaultMaxPrice} />
        </div>
        <div>
          <input className={styled.submit} type="submit" value="Применить" />
        </div>
      </form>
    </div>
  );
};

ProductFilter.defaultProps = {
  defaultMinPrice: 1,
  defaultMaxPrice: 999999,
};

ProductFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  defaultMinPrice: PropTypes.number,
  defaultMaxPrice: PropTypes.number,
};

export default ProductFilter;
