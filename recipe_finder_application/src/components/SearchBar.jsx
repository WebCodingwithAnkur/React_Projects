import React, { useState } from 'react';
import FavoritesList from './FavoritesList';

const SearchBar = ({ onSearch, loading, errorMessage }) => {
    const [ingredient, setIngredient] = useState('');
    const [isFavoritesOpen, setFavoritesOpen] = useState(false);

    const handleSearch = () => {
        if (ingredient) {
            onSearch(ingredient);
            setIngredient('');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
         <div className="mb-6">
            <input
                type="text"
                className="p-2 border border-gray-300 rounded-md mr-2"
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
                placeholder="Enter ingredient..."
            />
            </div>

            <div className="flex space-x-4">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
                    onClick={handleSearch}
                >
                    {loading ? (
                        <svg
                            className="animate-spin h-5 w-5 text-white inline-block mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8V12H4z"
                            ></path>
                        </svg>
                    ) : (
                        'Search'
                    )}</button>

                               <button
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
                    onClick={() => setFavoritesOpen(true)}
                >
                    View Favorites
                </button>
            </div>


            {/* Fancy Responsive Modal for Favorites List */}
            {isFavoritesOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                    <div className="relative bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-6 w-full max-w-lg lg:max-w-3xl rounded-xl shadow-2xl transition transform duration-300 ease-in-out scale-100 sm:scale-90">
                        {/* Close Button */}
                        <button
                            className="absolute top-3 right-3 text-white hover:text-gray-300 focus:outline-none"
                            onClick={() => setFavoritesOpen(false)}
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

                        {/* Title */}
                        <h2 className="text-4xl font-extrabold mb-6 text-center text-white drop-shadow-lg">
                            Your Favorite Recipes
                        </h2>

                        {/* Favorites List */}
                        <FavoritesList />

                        {/* Close Button at Bottom */}
                        <button
                            className="mt-6 w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white py-2 px-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
                            onClick={() => setFavoritesOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
