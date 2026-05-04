import React from 'react';

function Meal({ meal }) {
  return (
    <div className="meal-card">
      <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
      <div className="meal-info">
        <h3>{meal.strMeal}</h3>
        <p><strong>Category:</strong> {meal.strCategory}</p>
        <p><strong>Area:</strong> {meal.strArea}</p>
        <p><strong>Tags:</strong> {meal.strTags}</p>
      </div>
    </div>
  );
}

export default Meal;