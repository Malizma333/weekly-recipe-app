import { getRecipeData } from "../services/recipe_data_fetch";
import { defaultBrinnerIndex, brinnerRecipe, dataKeys } from "../constants";
import { saveData, loadData } from "../services/locals_retrieval";

const recipeSheetData = await getRecipeData();

export const retrieveMealSchedule = () => {
  const mealSchedule = loadData(dataKeys.schedule)

  if(mealSchedule) {
    return mealSchedule;
  } else {
    const newSchedule = shuffleRecipes();
    saveData(newSchedule, dataKeys.schedule)
    return newSchedule;
  }
}

export const shuffleRecipes = () => {
  const recipeData = loadData(dataKeys.recipes);
  let recipeList = recipeData;

  if(!recipeList) {
    recipeList = [...recipeSheetData];
  }

  const mealSchedule = [];

  while (mealSchedule.length < 6) {
    if(recipeList.length === 0) {
      recipeList = [...recipeSheetData];
    }

    const randomIndex = Math.floor(Math.random() * recipeList.length);
    const randomItem = recipeList.splice(randomIndex, 1)[0]

    mealSchedule.push(randomItem);
  }

  saveData(recipeList, dataKeys.recipes);

  let brinnerIndex = defaultBrinnerIndex;
  const storedSettings = loadData(dataKeys.settings);
  
  if(storedSettings) {
    brinnerIndex = storedSettings.brinnerDay
  }

  mealSchedule.splice(brinnerIndex, 0, brinnerRecipe)

  saveData(mealSchedule, dataKeys.schedule);

  return mealSchedule;
}
