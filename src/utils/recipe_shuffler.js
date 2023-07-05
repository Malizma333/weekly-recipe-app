import { getRecipeData } from "../services/recipe_data_fetch";
import { brinnerIndex, brinnerRecipe } from "../constants";

const recipeData = await getRecipeData();

export const retrieveShuffledRecipes = () => {
  const weekRecipe = [];

  while (weekRecipe.length < 6) {
    const randomIndex = Math.floor(Math.random() * recipeData.length);
    const randomItem = recipeData[randomIndex];

    if (!weekRecipe.includes(randomItem)) {
      weekRecipe.push(randomItem);
    }
  }

  weekRecipe.splice(brinnerIndex, 0, brinnerRecipe)

  return weekRecipe;
}
