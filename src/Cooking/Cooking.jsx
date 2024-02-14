import { recipes } from "./Cooking.js";
import "../App.css";
export function RecipeBook() {
  return (
    <div className="cookingDiv">
      {recipes.map((recipe) => (
        <div className="cookingContainer" key={recipe.dish}>
          <div className="cookingTitle">
            <h2 className="recipe">{recipe.dish}</h2>
            <p className="cooker">{recipe.cooker}</p>
          </div>
          <div className="cookingImageContainer">
            <img
              src={recipe.image}
              alt={recipe.dish}
              className="cookingImages"
            />
            <div className="cookingStats">
              <p className="nutrition">Nutrition: {recipe.nutrition}</p>
              <p className="sanity">Sanity: {recipe.sanity}</p>
              <p className="buffs">Buffs: {recipe.buffs}</p>
            </div>
            <div className="cookingIngredients">
              <p className="ingredients">{recipe.ingredients}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
