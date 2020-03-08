import React from 'react';

const Recipe = ({ recipe }) => {
  return (

    <div>
      <h1>Title => {recipe.label} {console.log(recipe)}</h1>
      <p>Calories {recipe.calories}</p>
      <img src={recipe.image} alt="" />
    </div>
  )
}

export default Recipe;