import React, { useState } from 'react';

import './App.css';
import { DetailContainer } from './containers/detail_container';
import { TableContainer } from './containers/table_container';
import { AddRecipeContainer } from './containers/recipe_form_container';
import { ActionContainer } from './containers/action_container';
import { SettingsContainer } from './containers/settings_container';
import { RecipeRequestContainer } from './containers/recipe_request_container';

import { loadData } from './services/locals_retrieval';
import { colorPalette, defaultIsDarkMode, dataKeys, pages } from './constants';

function App() {
  applyDarkModeSetting()

  const [mealSchedule, setMealSchedule] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const [visiblePage, setPage] = useState(null);
  const closePage = () => setPage(null);

  return (
    <div className="App">
      <header className="App-header">
        <ActionContainer
          setPage={setPage}
          setMealSchedule={setMealSchedule}
        />
        <TableContainer
          setRecipe={setSelectedRecipe}
          mealSchedule={ mealSchedule }
          setMealSchedule={ setMealSchedule }
        />
        <DetailContainer
          selectedRecipe={selectedRecipe}
        />
        {visiblePage === pages.newRecipe && <AddRecipeContainer close={closePage}/>}
        {visiblePage === pages.settings && <SettingsContainer close={closePage}/>}
        {visiblePage === pages.recipeRequest && <RecipeRequestContainer close={closePage}/>}
      </header>
    </div>
  );
}

export default App;

const applyDarkModeSetting = () => {
  const settings = loadData(dataKeys.settings)
  const isDarkMode = (settings && settings.isDarkMode) || (!settings && defaultIsDarkMode)

  if(isDarkMode) {
    document.documentElement.style.setProperty(
      '--primary-color', colorPalette.primaryColorDark);
    document.documentElement.style.setProperty(
      '--secondary-color', colorPalette.secondaryColorDark);
    document.documentElement.style.setProperty(
      '--text-color', colorPalette.textColorDark);
  } else {
    document.documentElement.style.setProperty(
      '--primary-color', colorPalette.primaryColorLight);
    document.documentElement.style.setProperty(
      '--secondary-color', colorPalette.secondaryColorLight);
    document.documentElement.style.setProperty(
      '--text-color', colorPalette.textColorLight);
  }
}