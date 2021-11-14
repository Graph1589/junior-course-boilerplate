import * as _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { minBy, maxBy } from 'csssr-school-utils';
import ProductsList from './components/ProductsList/ProductsList';
import ProductsHeader from './components/ProductsHeader/ProductsHeader';
import InputNumber from './components/InputNumber/InputNumber';
import InputDiscount from './components/InputDiscount/InputDiscount';
import SelectCategory from './components/SelectCategory/SelectCategory';
import ResetFilterButton from './components/ResetFiltersButton/ResetFilterButton';
import CategoryContext from './context';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    const { products } = this.props;
    const prices = products.map((item) => item.price);
    const defaultMinPrice = minBy((price) => price, prices);
    const defaultMaxPrice = maxBy((price) => price, prices);
    const defaultDiscount = 30;
    this.uniqCategories = this.getUniqCategories();

    this.defaultFilter = {
      minPrice: defaultMinPrice,
      maxPrice: defaultMaxPrice,
      discount: defaultDiscount,
      activeCategories: [],
    };

    this.state = {
      filter: this.defaultFilter,
    };
  }

  componentDidMount() {
    window.addEventListener('popstate', this.setFromHistory);
    const [, categoriesFromUrl] = window.location.search.split('=');
    if (categoriesFromUrl) {
      window.history.replaceState({ categories: categoriesFromUrl }, 'categories', window.location.search);
      this.setState((state) => {
        const { filter } = state;
        return {
          ...state, filter: { ...filter, activeCategories: categoriesFromUrl.split('&') },
        };
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.setFromHistory);
  }

  setFromHistory = (e) => {
    const activeCategories = e.state.categories;
    this.setState((state) => {
      const { filter } = state;
      return {
        ...state, filter: { ...filter, activeCategories },
      };
    });
  }

  handleResetFilters = () => {
    this.setState((state) => ({
      ...state,
      filter: this.defaultFilter,
    }));
    window.history.pushState(
      null,
      'all categories',
      '/',
    );
  }

  handleCategoryClick = (category) => () => {
    const { filter: { activeCategories } } = this.state;
    const newActiveCategories = activeCategories.includes(category)
      ? activeCategories.filter((item) => item !== category)
      : [...activeCategories, category];

    this.setState((state) => {
      const { filter } = state;
      return {
        ...state,
        filter: {
          ...filter,
          activeCategories: newActiveCategories,
        },
      };
    });

    const queryCategories = newActiveCategories.legth === 0
      ? '/'
      : `?categories=${newActiveCategories.join('&')}`;

    window.history.pushState(
      { categories: newActiveCategories },
      'categories',
      queryCategories,
    );
  }

  getUniqCategories = () => {
    const { products } = this.props;
    const categories = products.map(({ category }) => category);
    return _.uniq(categories);
  }

  setFilter = (receivedFilter) => {
    const { filter } = this.state;
    this.setState({
      filter: { ...filter, ...receivedFilter },
    });
  }

  render() {
    const { filter } = this.state;
    const { products } = this.props;
    const {
      minPrice, maxPrice, discount, activeCategories,
    } = filter;

    const filteredProducts = products.filter((item) => (
      (item.price >= minPrice) && (item.price <= maxPrice) && (item.discount >= discount)
      && (activeCategories.includes(item.category) || activeCategories.length === 0)
    ));

    return (
      <>
        <ProductsHeader />
        <div className="filterWrapper">
          <InputNumber
            setFilter={this.setFilter}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />
          <InputDiscount
            setFilter={this.setFilter}
            discount={discount}
          />
          <CategoryContext.Provider value={activeCategories}>
            <SelectCategory
              categories={this.uniqCategories}
              handleCategoryClick={this.handleCategoryClick}
            />
          </CategoryContext.Provider>
          <ResetFilterButton
            onClick={this.handleResetFilters}
          />
        </div>
        {
          filteredProducts.length === 0
            ? 'Товары не найдены'
            : <ProductsList products={filteredProducts} />
        }
      </>
    );
  }
}

App.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

App.defaultProps = {
  products: [],
};

export default App;
