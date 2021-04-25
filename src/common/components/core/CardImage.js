import React from 'react';
import PropTypes from 'prop-types';

export function CardImage({src, alt}) {
  return (
    <div className='card-image'>
      <img src={src} alt={alt} />
    </div>
  )
}

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default CardImage;
