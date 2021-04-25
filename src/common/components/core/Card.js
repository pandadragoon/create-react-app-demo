import React from 'react';
import PropTypes from 'prop-types'
import CardImage from './CardImage';
import CardBody from './CardBody';
import CardHeader from './CardHeader';


export function Card({image, header, body, children}) {
  return (
    <section className={'card'}>
      {image ? (
        <CardImage {...image} />
      ) : null}
      { header ? (
        <CardHeader {...header} />
      ) : null}
      <CardBody {...body}>
        {children}
      </CardBody>
    </section>
  )
}

Card.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }),
  header: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string
  }),
  body: PropTypes.shape({
    contentText: PropTypes.string,
    contentTitle: PropTypes.string,
    contentContainer: PropTypes.node
  })

};

export default Card;
