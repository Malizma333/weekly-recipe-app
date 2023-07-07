import './week_table.css';
import React, { useState, useEffect } from 'react';
import { weekDays, tableHeaders } from '../constants';
import { retrieveMealSchedule } from '../utils/recipe_shuffler';

export const WeekTable = ({ recipeClick }) => {
  const [recipes, setRecipe] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const recipeData = retrieveMealSchedule();
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
              onClick={() => recipeClick(recipe)}
            >
              {recipe[tableHeaders[0]]}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
