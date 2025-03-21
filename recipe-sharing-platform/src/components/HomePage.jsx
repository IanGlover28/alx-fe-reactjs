import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Ensure json() is called correctly
      })
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
    <Link to="/add-recipe" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
  Add Recipe
</Link>
      <h1 className="text-2xl font-bold text-center mb-6">Recipe List</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 grid sm:grid-cols-1">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4 hover:bg-gray-100">
              <h2 className="text-lg font-semibold">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
              <Link to={`/Recipe/${recipe.id}`} className="text-blue-500 hover:underline">
                View Details
              </Link>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
