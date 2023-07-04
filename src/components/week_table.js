import './week_table.css';
import React, { useState, useEffect } from 'react';
import { getRecipeData } from '../services/meal_data_fetch.js';
import { weekDays, tableHeaders } from '../constants';

export const WeekTable = (handleMealClick) => {
  const [recipes, setRecipe] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const recipeData = await getRecipeData();
      setRecipe(recipeData);
    };

    getData();
  }, []);

  return (
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
  );
};
