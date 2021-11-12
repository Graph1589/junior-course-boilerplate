/* eslint react/prop-types: off */
import React from 'react';

export default (Input) => class HoccedInput extends React.PureComponent {
  handleChange = (e) => {
    const { value, name } = e.target;
    const maskedValue = value.replace(/\D/g, '');
    if (value === maskedValue) {
      const { setFilter } = this.props;
      setFilter({
        [name]: +maskedValue,
      });
    }
  }

  render() {
    const { setFilter, ...restProps } = this.props;
    return (
      <Input onChange={this.handleChange} values={restProps} />
    );
  }
};
