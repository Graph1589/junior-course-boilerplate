import React from 'react';
import PropTypes from 'prop-types';

const RatingStar = ({ isFilled }) => {
  const type = isFilled ? 'filled' : 'empty';
  const src = `/ratingStars/${type}.png`;
  const alt = `${type} star`;
  return (
    <img src={src} alt={alt} />
  );
};

RatingStar.propTypes = {
  isFilled: PropTypes.bool,
};

RatingStar.defaultProps = {
  isFilled: false,
};

export default RatingStar;
