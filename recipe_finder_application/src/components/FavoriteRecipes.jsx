// src/components/FavoriteRecipes.js
import React, { useEffect, useState } from 'react';

const FavoriteRecipes = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p>No favorite recipes yet!</p>
      ) : (
        <ul>
          {favorites.map((recipe, index) => (
            <li key={index}>{recipe.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteRecipes;
