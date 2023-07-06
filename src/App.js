import React, { useState } from 'react';

import './App.css';
import { DetailContainer } from './containers/detail_container';
import { TableContainer } from './containers/table_container';
import { AddRecipeContainer } from './containers/recipe_form_container';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const [addingRecipe, setNewRecipeVisible] = useState(false);

  const handleAddRecipeClick = () => {
    setNewRecipeVisible(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <TableContainer recipeClick={handleRecipeClick} addRecipeClick={handleAddRecipeClick} />
        <DetailContainer selectedRecipe={selectedRecipe} />
        {addingRecipe && <AddRecipeContainer setDivVisible={setNewRecipeVisible} />}
      </header>
    </div>
  );
}

export default App;
