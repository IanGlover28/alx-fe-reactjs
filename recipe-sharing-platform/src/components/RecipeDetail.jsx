import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams(); // Get recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch recipe data from JSON
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error("Error loading recipe:", error));
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-600">Loading recipe...</p>;
  }

  return (
    <div className="container mx-auto p-6 shadow">
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p className="text-gray-700">{recipe.description}</p>

      <h2 className="text-xl font-semibold mt-6">Ingredients</h2>
      <ul className="list-disc pl-5">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-600">{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6">Instructions</h2>
      <ol className="list-decimal pl-5">
        {recipe.instructions.map((step, index) => (
          <li key={index} className="text-gray-600">{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
