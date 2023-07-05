import './week_table.css';
import React, { useState, useEffect } from 'react';
import { weekDays, tableHeaders } from '../constants';
import { retrieveShuffledRecipes } from '../utils/recipe_shuffler';

export const WeekTable = (handleRecipeClick) => {
  const [recipes, setRecipe] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const recipeData = retrieveShuffledRecipes();
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
          {recipes.map((recipe, index) => (
            <td
              className='recipe-name-text'
              key={index}
              onClick={() => handleRecipeClick(recipe)}
            >
              {recipe[tableHeaders[0]]}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
