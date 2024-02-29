export default async function getRecipeData() {
  try {
    const url = process.env.NODE_ENV === 'production'
      ? 'https://recipe-app-service-wpwz.onrender.com/google_sheet'
      : 'http://localhost:9000/google_sheet'
    const response = await fetch(url, { method: 'GET' })
    const result = await response.json();
    const headers = result[0];
    const recipes = [];

    for(let i = 1; i < result.length; i++) {
      const currentRecipe = {};
      for(let j = 0; j < result[i].length; j++) {
        currentRecipe[headers[j]] = result[i][j];
      }
      recipes.push(currentRecipe);
    }

    console.info("[Google Sheet Client] Success!");
    return recipes;
  } catch(e) {
    console.info("[Google Sheet Client]", e.message);
    return [];
  }
}
