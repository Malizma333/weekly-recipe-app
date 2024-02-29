export default async function getRecipeData() {
  try {
    const response = await fetch('http://localhost:9000/google_sheet', {
      method: 'GET'
    })
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
