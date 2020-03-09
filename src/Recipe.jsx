import React from 'react';

const Recipe = ({ title, calories, image }) => {
  return (
    <div className="col-4">
      <div class="card">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">Calories: {calories}</p>
        </div>
      </div>
    </div>
  );
}

export default Recipe;