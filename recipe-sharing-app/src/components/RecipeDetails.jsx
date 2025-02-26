import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import '../App.css';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) => state.recipes.find((r) => r.id === Number(id)));
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  if (!recipe) return <p>Recipe not found!</p>;

  const handleDelete = () => {
    deleteRecipe(recipe.id);
    navigate('/');
  };

  return (
    <div className="recipe-details">
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <button onClick={handleDelete} className="delete-button">Delete Recipe</button>
    </div>
  );
};

export default RecipeDetails;