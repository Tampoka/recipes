import React, { useState } from 'react';
import IngredientsList from './IngredientsList';
import Instructions from './Instructions';
import StarRating from './StarRating';

function Recipe({ name, ingredients, steps }) {
  const [rating, setRating] = useState(0);
  return (
    <section id={name.toLowerCase().replace(/ /g, '-')}>
      <h1>{name}</h1>
      <StarRating
        style={{ backgroundColor: 'lightblue' }}
        onRate={setRating}
        selectedStars={rating}
      />
      <IngredientsList list={ingredients} />
      <Instructions title="Cooking Instructions" steps={steps} />
    </section>
  );
}

export default Recipe;
