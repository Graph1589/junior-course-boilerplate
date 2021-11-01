import React from 'react';
import styled from './ProductFilter.module.css';

const ProductFilter = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const formData = new FormData(e.target);
    const minPrice = formData.get('minPrice');
    const maxPrice = formData.get('maxPrice');
    console.log(minPrice);
    console.log(maxPrice);
  };

  return (
    <div className={styled.filter}>
      <form onSubmit={submitHandler}>
        <div className={styled.title}>
          <b>Цена</b>
        </div>
        <div className={styled.inputContainer}>
          <b>От</b>
          <input name="minPrice" className={styled.input} type="number" placeholder="1999" />
          <b>До</b>
          <input name="maxPrice" className={styled.input} type="number" placeholder="28000" />
        </div>
        <div>
          <input className={styled.submit} type="submit" value="Применить" />
        </div>
      </form>
    </div>
  );
};

export default ProductFilter;
