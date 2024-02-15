import { recipes } from "./Cooking.js";
import "../App.css";
export function RecipeBook() {
  return (
    <div className="cookingDiv">
      {recipes.map((recipe) => (
        <div className="cookingContainer" key={recipe.dish}>
          <div className="cookingTitle">
            <h3 className="recipe">{recipe.dish}</h3>
            <p className="cooker">{recipe.cooker}</p>
          </div>
          <div className="cookingImageContainer">
            <img
              src={recipe.image}
              alt={recipe.dish}
              className="cookingImages"
            />
            <div className="cookingInfo">
              <div className="cookingStats">
                <div className="nutritionAndSanity">
                  <p className="nutrition">Nutrition: {recipe.nutrition}</p>
                  <p className="sanity">Sanity: {recipe.sanity}</p>
                </div>

                <p className="buffs">{recipe.buffs}</p>
              </div>
              <div className="cookingIngredients">
                <p className="ingredients">Ingredients: {recipe.ingredients}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
