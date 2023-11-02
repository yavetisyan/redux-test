import React from 'react';

const RecipeItem = ({recipe}) => {
  return (
    <div>
      {/*<img src="" alt=""/>*/}
      <h4>{recipe.name}</h4>
      <button>Add to favorites</button>
    </div>
  );
};

export default RecipeItem;