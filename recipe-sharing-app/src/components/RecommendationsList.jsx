import useRecipeStore from '../store/recipeStore';
import '../styles/RecommendationsList.css';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);

  return (
    <div className="recommendations-container">
      <h2>Recommended for You</h2>
      <div className="recommendations-list">
        {recommendations.map(recipe => (
          <div key={recipe.id} className="recommendation-item">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsList;
