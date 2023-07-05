import { getRecipeData } from "../services/meal_data_fetch";
import { brinnerIndex, brinnerMeal } from "../constants";

const recipeData = await getRecipeData();

export const retrieveShuffledMeals = () => {
  const weekRecipe = [];

  while (weekRecipe.length < 6) {
    const randomIndex = Math.floor(Math.random() * recipeData.length);
    const randomItem = recipeData[randomIndex];

    if (!weekRecipe.includes(randomItem)) {
      weekRecipe.push(randomItem);
    }
  }

  weekRecipe.splice(brinnerIndex, 0, brinnerMeal)

  return weekRecipe;
}
