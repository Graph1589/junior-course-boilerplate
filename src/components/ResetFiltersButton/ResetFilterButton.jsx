import React from 'react';
import LogRender from '../LogRender/LogRender';
import styled from './ResetFilterButton.module.css';

class ResetFilterButton extends LogRender {
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <p className={styled.resetButtonLabel}>
          <button onClick={onClick} type="submit" className={styled.resetButton}>
            Сбросить фильтры
          </button>
        </p>
      </div>
    );
  }
}

export default ResetFilterButton;
