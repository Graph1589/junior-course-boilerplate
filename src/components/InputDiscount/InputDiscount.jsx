import React from 'react';
import Discount from 'csssr-school-input-discount';
import LogRender from '../LogRender/LogRender';
import InputHoc from '../../hocs/InputHoc';

class InputDiscount extends LogRender {
  render() {
    const { onChange, values: { discount } } = this.props;
    const title = 'Скидка';
    const name = 'discount';
    return (
      <Discount title={title} name={name} value={discount} onChange={onChange} />
    );
  }
}

export default InputHoc(InputDiscount);
