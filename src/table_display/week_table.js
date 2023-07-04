import './week_table.css';
import React, { useState, useEffect } from 'react';

const requestURL = 'https://sheet.best/api/sheets/bc0e1e85-d071-4768-8dd9-6176279aa2d8'
const tableHeaders = [
  'Recipe Name',
  'Description',
  'Allergens',
  'Instructions'
]

const getRecipeData = async () => {
  try {
    const response = await fetch(requestURL)
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
}

const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const WeekTable = () => {
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
  };

  const [recipes, setRecipe] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const recipeData = await getRecipeData();
      setRecipe(recipeData);
    };

    getData();
  }, []);

  return (
    <div>
      <table className='week-table'>
        <thead>
          <tr>
            {weekDays.map((day) => (
              <th>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {recipes.map((meal, index) => (
              <td key={index} onClick={() => handleMealClick(meal)}>
                {meal[tableHeaders[0]]}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      {selectedMeal && (
        <div>
          <h3>{selectedMeal.name}</h3>
          <p>Description: {selectedMeal[tableHeaders[1]]}</p>
          <p>Allergies: {selectedMeal[tableHeaders[2]]}</p>
          <a href={selectedMeal[tableHeaders[3]]} target="_blank" rel="noopener noreferrer">
            Recipe Instructions
          </a>
        </div>
      )}
    </div>
  );
};

export default WeekTable;
