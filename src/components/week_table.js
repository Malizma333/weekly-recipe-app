import './week_table.css';
import React, { useState, useEffect } from 'react';
import { weekDays, tableHeaders } from '../constants';
import { retrieveShuffledMeals } from '../utils/meal_shuffler';

export const WeekTable = (handleMealClick) => {
  const [recipes, setRecipe] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const recipeData = await retrieveShuffledMeals();
      setRecipe(recipeData);
    };

    getData();
  }, []);

  return (
    <table className='week-table'>
      <thead>
        <tr>
          {weekDays.map((day, i) => (
            <th key={i}> {day} </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {recipes.map((meal, index) => (
            <td
              className='recipe-name-text'
              key={index}
              onClick={() => handleMealClick(meal)}
            >
              {meal[tableHeaders[0]]}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
