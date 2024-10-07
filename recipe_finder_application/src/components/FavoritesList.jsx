import React, { useEffect, useState } from 'react';
import { getFavoritesFromLocalStorage } from '../util/localStorageUtil';

const FavoritesList = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = getFavoritesFromLocalStorage();
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Your Favorite Recipes</h2>
      {favorites.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((recipe) => (
            <li key={recipe.id} className="bg-white shadow-md p-4 rounded-lg">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
              <p>Ready in {recipe.readyInMinutes} minutes</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>You have no favorite recipes yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;
