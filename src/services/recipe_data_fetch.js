import { sheetApiUrl } from "../constants";

export const getRecipeData = async () => {
  try {
    const response = await fetch(sheetApiUrl)
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
}
