import React, { useState } from 'react';

import './App.css';
import { DetailContainer } from './containers/detail_container';
import { TableContainer } from './containers/table_container';
import { AddRecipeContainer } from './containers/recipe_form_container';
import { ActionContainer } from './containers/action_container';
import { SettingsContainer } from './containers/settings_container';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const [visiblePage, setPage] = useState('None');
  const closePage = () => setPage('None');

  return (
    <div className="App">
      <header className="App-header">
        <ActionContainer setPage={setPage} />
        <TableContainer recipeClick={handleRecipeClick} />
        <DetailContainer selectedRecipe={selectedRecipe} />
        {visiblePage === 'newRecipe' && <AddRecipeContainer close={closePage}/>}
        {visiblePage === 'settings' && <SettingsContainer close={closePage}/>}
      </header>
    </div>
  );
}

export default App;
