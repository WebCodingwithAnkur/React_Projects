import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes,onViewRecipe }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe}   onViewRecipe={onViewRecipe}/>
      ))}
    </div>
  );
};

export default RecipeList;
