/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from './InputNumber.module.css';
import LogRender from '../LogRender/LogRender';
import InputHoc from '../../hocs/InputHoc';

class InputNumber extends LogRender {
  render() {
    const {
      onChange, values: {
        minPrice, maxPrice,
      },
    } = this.props;
    return (
      <form className={styled.filter}>
        <div className={styled.title}>
          <b>Цена</b>
        </div>
        <div className={styled.inputContainer}>
          <label>От</label>
          <input onChange={onChange} name="minPrice" className={styled.input} value={minPrice} />
          <label>До</label>
          <input onChange={onChange} name="maxPrice" className={styled.input} value={maxPrice} />
        </div>
      </form>
    );
  }
}

export default InputHoc(InputNumber);
