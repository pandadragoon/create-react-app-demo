import React from 'react';
import PropTypes from 'prop-types';

export function CardBody({contentText, contentTitle, contentContainer: Container, children}) {
  const CardBodyContainer = Container ? Container : DefaultContainer
  return (
    <CardBodyContainer>
      <header>
        {contentTitle}
      </header>
      <p>
        {contentText}
      </p>
      { children }
    </CardBodyContainer>
  )
}

function DefaultContainer({children}){
  return (
    <section className={'card-body'}>
      {children}
    </section>
  )
};

CardBody.propTypes = {
  contentText: PropTypes.string,
  contentTitle: PropTypes.string,
  contentContainer: PropTypes.node,
  children: PropTypes.node
};

export default CardBody;
