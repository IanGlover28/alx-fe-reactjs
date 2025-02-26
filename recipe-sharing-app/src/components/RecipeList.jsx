import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';
import '../App.css';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes.length ? state.filteredRecipes : state.recipes);

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`} className="details-link">View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;

