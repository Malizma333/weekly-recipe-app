import './App.css';
import { WeekTable } from './components/week_table.js';
import { MealDetails } from './components/meal_details.js';
import React, { useState } from 'react';

function App() {
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
  };

  return (
    <div className="App">
      <header className="App-header">
        {WeekTable(handleMealClick)}
        {selectedMeal && MealDetails(selectedMeal)}
      </header>
    </div>
  );
}

export default App;
