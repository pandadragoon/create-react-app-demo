import React from 'react';
import PropTypes from 'prop-types';

export function CardHeader({title, subtitle, children}) {
  return (
    <header className={'card-header'}>
      <h4>
        {title}
        <span>{subtitle}</span>
      </h4>
      {children}
    </header>
  )
}

CardHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node
}

export default CardHeader;
