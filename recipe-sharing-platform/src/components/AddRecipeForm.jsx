import { useState } from "react";

const AddRecipeForm = () => {
  // State for form inputs
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  // State for validation errors
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Reset errors

    // Validation checks
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    const ingredientList = ingredients.split(",").map((item) => item.trim());
    if (ingredientList.length < 2) {
      setError("Please add at least two ingredients, separated by commas.");
      return;
    }

    // Form data object
    const newRecipe = {
      title,
      ingredients: ingredientList,
      steps,
    };

    console.log("Recipe Submitted:", newRecipe);

    // Clear form after submission
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Add a New Recipe</h2>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label className="block text-gray-700 font-medium">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium">Ingredients (comma separated)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="E.g. Eggs, Flour, Sugar"
            rows="3"
          ></textarea>
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block text-gray-700 font-medium">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Describe the preparation steps..."
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
