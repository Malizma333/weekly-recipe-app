import React, { useState } from 'react';

import './App.css';
import { DetailContainer } from './containers/detail_container';
import { TableContainer } from './containers/table_container';

function App() {
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
  };

  return (
    <div className="App">
      <header className="App-header">
        {TableContainer(handleMealClick)}
        {DetailContainer(selectedMeal)}
      </header>
    </div>
  );
}

export default App;
