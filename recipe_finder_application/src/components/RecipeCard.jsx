import React from 'react';

const RecipeCard = ({ recipe ,onViewRecipe }) => {

 const { title, image, readyInMinutes,id } = recipe;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        {/* <p className="text-gray-500">Ready in {readyInMinutes} minutes</p> */}
        <button className="mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out" onClick={() => onViewRecipe(id)}>
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
