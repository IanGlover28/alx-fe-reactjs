import useRecipeStore from './recipeStore';
import '../App.css';

const FavoritesList = () => {
  const favorites = useRecipeStore(state => state.favorites.map(id =>
    state.recipes.find(recipe => recipe.id === id)
  ));

  return (
    <div className="favorites-container">
      <h2>My Favorites</h2>
      <div className="favorites-list">
        {favorites.map(recipe => (
          <div key={recipe.id} className="favorite-item">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
