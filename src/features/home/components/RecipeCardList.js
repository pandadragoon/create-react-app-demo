import React from 'react';
import PropTypes from 'prop-types'
import RecipeCard from './RecipeCard'

export function RecipeCardList({recipes = []}) {
  return (
    <div>
      { recipes.map(recipe => {
        const image = {
          src: recipe.strMealThumb,
          alt: recipe.strMeal
        }
        return <RecipeCard image={image} title={recipe.strMeal} key={recipe.idMeal} />
      })}
    </div>
  )
}

RecipeCardList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object)
}

export default RecipeCardList;
