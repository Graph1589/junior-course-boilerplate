import React from 'react';
import cn from 'classnames';
import CategoryContext from '../../context';
import LogRender from '../LogRender/LogRender';
import styled from './SelectCategory.module.css';

class SelectCategory extends LogRender {
  renderCategoryButtons = () => {
    const { handleCategoryClick } = this.props;
    const { categories } = this.props;
    return (
      <CategoryContext.Consumer>
        {((activeCategories) => (
          <div className={styled.categoryButtonsWrapper}>
            {categories.map((category) => {
              const categoryBtnCn = cn(styled.categoryButton, {
                [styled.active]: activeCategories.includes(category),
              });
              return (
                <p key={`${category}-category-btn`} className={styled.categoryButtonLabel}>
                  <button onClick={handleCategoryClick(category)} name={category} type="submit" className={categoryBtnCn}>
                    {category}
                  </button>
                </p>
              );
            })}
          </div>
        ))}
      </CategoryContext.Consumer>
    );
  };

  render() {
    return (
      <div className={styled.wrapper}>
        <div className={styled.title}>
          <b>Категории</b>
        </div>
        <div className={styled.container}>
          {this.renderCategoryButtons()}
        </div>
      </div>
    );
  }
}

export default SelectCategory;
