import React from 'react';
import PropTypes from 'prop-types';
import { minBy, maxBy } from 'csssr-school-utils';
import ProductsList from './components/ProductsList/ProductsList';
import ProductsHeader from './components/ProductsHeader/ProductsHeader';
import InputNumber from './components/InputNumber/InputNumber';
import InputDiscount from './components/InputDiscount/InputDiscount';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    const { products } = this.props;
    const prices = products.map((item) => item.price);
    const defaultMinPrice = minBy((price) => price, prices);
    const defaultMaxPrice = maxBy((price) => price, prices);
    const defaultDiscount = 30;

    this.state = {
      filter: {
        minPrice: defaultMinPrice,
        maxPrice: defaultMaxPrice,
        discount: defaultDiscount,
      },
    };
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
    const { minPrice, maxPrice, discount } = filter;
    const filteredProducts = products.filter((item) => (
      (item.price >= minPrice) && (item.price <= maxPrice) && (item.discount >= discount)
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
