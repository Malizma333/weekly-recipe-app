const requestURL = 'https://sheet.best/api/sheets/bc0e1e85-d071-4768-8dd9-6176279aa2d8'

export const getRecipeData = async () => {
  try {
    const response = await fetch(requestURL)
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
}
