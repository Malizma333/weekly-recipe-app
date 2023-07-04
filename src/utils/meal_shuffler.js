import { getRecipeData } from "../services/meal_data_fetch";

export const retrieveWeeklyMeals = async () => {
  const recipeData = await getRecipeData();
  return recipeData.slice(0,7);
}