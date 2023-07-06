import { sheetURL } from "../constants";

export const getRecipeData = async () => {
  try {
    const response = await fetch(sheetURL)
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
}
