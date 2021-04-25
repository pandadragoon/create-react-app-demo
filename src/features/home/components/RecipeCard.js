import React from "react";
import PropTypes from 'prop-types';
import Card from "@core/Card";
import CardHeader from "@core/CardHeader";
import CardImage from "@core/CardImage";
import "../styles/RecipeCard.scss";

export function RecipeCard({title, image}) {
  return (
    <div className="recipe-card">
      <Card>
        <CardHeader title={title} />
        <CardImage {...image} />
      </Card>
    </div>
  )
}

RecipeCard.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired
}
export default RecipeCard;
