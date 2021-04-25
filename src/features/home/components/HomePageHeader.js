import React from 'react';
import PropTypes from 'prop-types';

export function HomePageHeader({title, subtitle}) {
  return (
    <h1>
      {title}
      <span>{subtitle}</span>
    </h1>
  )
}

HomePageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};
export default HomePageHeader;
