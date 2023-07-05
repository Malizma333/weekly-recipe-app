import { getRecipeData } from "../services/meal_data_fetch";
import { brinnerIndex, brinnerMeal } from "../constants";

export const retrieveShuffledMeals = async () => {
  const recipeData = await getRecipeData();

  const weekRecipe = [];

  while (weekRecipe.length < 6) {
    const randomIndex = Math.floor(Math.random() * recipeData.length);
    const randomItem = recipeData[randomIndex];

    if (!weekRecipe.includes(randomItem)) {
      weekRecipe.push(randomItem);
    }
  }

  weekRecipe.splice(brinnerIndex, 0, brinnerMeal)

  console.log(weekRecipe[0], weekRecipe[brinnerIndex])

  return weekRecipe;
}
