// src/components/RecipeDetails.js
import React, { useEffect, useState } from 'react';
import {getFavoritesFromLocalStorage, saveFavoritesToLocalStorage} from '../util/localStorageUtil';

const RecipeDetails = ({ recipeId, onClose }) => {
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`
      );
      const data = await response.json();     
      setRecipeDetails(data);

       // Check if the recipe is already in favorites
       const favorites = getFavoritesFromLocalStorage();
       setIsFavorite(favorites.some((fav) => fav.id === recipeId));
    };

    fetchRecipeDetails();
  }, [recipeId]);


    // Toggle Favorite
    const handleFavoriteClick = () => {
        const favorites = getFavoritesFromLocalStorage();
        let updatedFavorites;
    
        if (isFavorite) {
          updatedFavorites = favorites.filter((fav) => fav.id !== recipeId);
        } else {
          updatedFavorites = [...favorites, recipeDetails];
        }
    
        saveFavoritesToLocalStorage(updatedFavorites);
        setIsFavorite(!isFavorite);
      };


  if (!recipeDetails) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-white text-lg">Loading recipe details...</p>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Larger width, height is auto depending on content */}
      <div className="relative bg-white bg-opacity-60 backdrop-blur-md rounded-lg p-6 w-full max-w-4xl shadow-lg transition transform duration-300 ease-in-out">
        <button
          className="absolute top-4 right-4 text-red-500 hover:text-red-700 focus:outline-none"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          {recipeDetails.title}
        </h2>
        <img
          src={recipeDetails.image}
          alt={recipeDetails.title}
          className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
        />
        <div className="text-lg text-gray-800 mb-4">
          Ready in {recipeDetails.readyInMinutes} minutes
        </div>
        <div className="text-lg font-semibold text-gray-900 mb-2">Ingredients:</div>
        <ul className="list-disc list-inside mb-4 text-gray-800">
          {recipeDetails.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
        <div className="text-lg font-semibold text-gray-900 mb-2">Instructions:</div>
        <p className="text-gray-800">
          {recipeDetails.instructions
            ? recipeDetails.instructions
            : 'No instructions provided.'}
        </p>

         <div className='flex'>
         {/* Add to Favorites Button */}
         <button
          className={`mt-6 py-2 px-6 row-auto  mr-4 rounded-lg shadow-md transform transition duration-300 ${
            isFavorite
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
          }`}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? 'Remove from Favorites' : 'Save to Favorites'}
        </button>

        <button
          className="mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-6 rounded-lg shadow-md hover:scale-105 transform transition duration-300"
          onClick={onClose}
        >
          Close
        </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
