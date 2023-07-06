import { sheetURL } from '../constants';

export const writeRecipeDataToCSV = async (recipeData) => {
  await fetch(sheetURL, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipeData)
  })
  .then((r) => r.json())
  .then((data) => {
    console.log("Successful Post");
  })
  .catch((error) => {
    console.error("An error occurred: ", error);
  });
};