// import { getRecipeData } from "../services/recipe_data_fetch";
import { defaultBrinnerIndex, brinnerRecipe, dataKeys, tableHeaders } from "../constants";
import { saveData, loadData } from "../services/locals_retrieval";

export const recipeSheetData = [] // await getRecipeData();

export const retrieveMealSchedule = () => {
  const mealSchedule = loadData(dataKeys.schedule);

  if (mealSchedule) {
    return mealSchedule;
  } else {
    return shuffleRecipes();
  }
};

export const shuffleRecipes = () => {
  let recipeList = loadData(dataKeys.recipes);

  if (!recipeList) {
    recipeList = [...recipeSheetData];
  }
    
  const recipeSheetIds = recipeSheetData.map(recipe => recipe['Recipe Name']);
  recipeList = recipeList.filter(recipe => recipeSheetIds.includes(recipe['Recipe Name']));

  let requestList = loadData(dataKeys.requests);

  if(!requestList) {
    requestList = [];
  }

  let brinnerIndex = defaultBrinnerIndex;
  const storedSettings = loadData(dataKeys.settings);

  if (storedSettings) {
    brinnerIndex = storedSettings.brinnerDay;
  }

  let mealSchedule = [];
  mealSchedule = applyRequestList(mealSchedule, requestList);
  mealSchedule = applyRecipeList(mealSchedule, recipeList);
  mealSchedule = shuffleMeals(mealSchedule);
  mealSchedule = applyBrinner(mealSchedule, brinnerIndex);

  saveData(mealSchedule, dataKeys.schedule);

  return mealSchedule;
};

const applyRequestList = (mealSchedule, requestList) => {
  mealSchedule = [...mealSchedule, ...requestList]

  saveData([], dataKeys.requests);

  return mealSchedule;
}

const applyRecipeList = (mealSchedule, recipeList) => {
  let recipeListCopy = [...recipeList]

  while (mealSchedule.length < Math.min(6, recipeList.length)) {
    if (recipeListCopy.length === 0) {
      recipeListCopy = [...recipeSheetData];
    }

    const randomIndex = Math.floor(Math.random() * recipeListCopy.length);
    const randomItem = recipeListCopy.splice(randomIndex, 1)[0];

    if(!mealSchedule.some(recipe => 
      recipe[tableHeaders.name] === randomItem[tableHeaders.name]
    )) {
      mealSchedule.push(randomItem);
    }
  }

  saveData(recipeListCopy, dataKeys.recipes);

  return mealSchedule;
}

const applyBrinner = (mealSchedule, brinnerIndex) => {
  mealSchedule.splice(brinnerIndex, 0, brinnerRecipe);

  return mealSchedule;
}

function shuffleMeals(mealSchedule) {
  for (let i = mealSchedule.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mealSchedule[i], mealSchedule[j]] = [mealSchedule[j], mealSchedule[i]];
  }
  return mealSchedule;
}