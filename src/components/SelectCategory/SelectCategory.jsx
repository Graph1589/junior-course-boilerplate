import React from 'react';
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
              const isActive = activeCategories.includes(category);
              return (
                <React.Fragment key={`${category}-category-button`}>
                  <input
                    id={`${category}-category-input`}
                    className={styled.categoryInput}
                    type="checkbox"
                    onChange={handleCategoryClick(category)}
                    checked={isActive}
                  />
                  <label
                    htmlFor={`${category}-category-input`}
                    className={styled.categoryLabel}
                  >
                    {category}
                  </label>
                </React.Fragment>
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
