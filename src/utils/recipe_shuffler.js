import { getRecipeData } from "../services/recipe_data_fetch";
import { defaultBrinnerIndex, brinnerRecipe } from "../constants";
import { loadSettings } from "../services/locals_retrieval";

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

  let brinnerIndex = defaultBrinnerIndex;
  const storedSettings = loadSettings();
  
  if(storedSettings) {
    brinnerIndex = storedSettings.brinnerDay
  }

  weekRecipe.splice(brinnerIndex, 0, brinnerRecipe)

  return weekRecipe;
}

// currentData = Pull from sheet <- call once, save in var for access
// currentWeekSchedule = Pull from local storage
// unusedRecipes = Pull from local storage
// clear unusedRecipes of recipes that aren't in currentData
// pop 6 unusedRecipes for a new weekly schedule
// if less than 6 left, populate a new unusedRecipes list with all from currentData
// store new unusedRecipes and new currentWeekSchedule