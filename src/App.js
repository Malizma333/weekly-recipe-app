import React, { useState } from 'react';

import './App.css';
import { DetailContainer } from './containers/detail_container';
import { TableContainer } from './containers/table_container';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="App">
      <header className="App-header">
        {TableContainer(handleRecipeClick)}
        {DetailContainer(selectedRecipe)}
      </header>
    </div>
  );
}

export default App;
