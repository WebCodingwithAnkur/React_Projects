import { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

function App() {

  const [recipes, setRecipes] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  const fetchRecipes = async (ingredient) => {
    setLoading(true); // Set loading state
    setErrorMessage(''); // Clear previous error message
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&apiKey=${apiKey}`
      );
      const data = await response.json();
      if (data.length === 0) {
        setErrorMessage('No recipes found for your search'); // Set error message if no recipes
      }
      setRecipes(data);
    } catch (err) {
      setErrorMessage('Error fetching recipes. Please try again later.');
    } finally {
      setLoading(false); // Stop loading once API call is done
    }
  };

  const handleViewRecipe = (recipeId) => {
    console.log(recipeId);
    setSelectedRecipeId(recipeId);
  };

  const handleCloseRecipe = () => {
    setSelectedRecipeId(null);
  };

  return (
    <div className="App">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center tracking-wide shadow-lg">
      Recipe Finder with Ingredient Search.</h1>
      <SearchBar onSearch={fetchRecipes} loading={loading} errorMessage={errorMessage} />

      {errorMessage && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg text-center sm:text-lg md:text-xl lg:text-2xl">
          {errorMessage}
        </div>
      )}
      <RecipeList recipes={recipes} onViewRecipe={handleViewRecipe} />
      {selectedRecipeId && (
        <RecipeDetails recipeId={selectedRecipeId} onClose={handleCloseRecipe} />
      )}
    </div>
  )
}

export default App
