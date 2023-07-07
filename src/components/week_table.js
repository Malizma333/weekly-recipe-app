import './week_table.css';
import { useEffect } from 'react';
import { weekDays, tableHeaders } from '../constants';
import { retrieveMealSchedule } from '../services/recipe_retrieval';

export const WeekTable = ({ setRecipe, mealSchedule, setMealSchedule }) => {
  const handleRecipeClick = (recipe) => {
    setRecipe(recipe);
  };

  useEffect(() => {
    const updatedMealSchedule = retrieveMealSchedule();
    setMealSchedule(updatedMealSchedule);
  }, [setMealSchedule]);

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
          {mealSchedule.map((recipe, index) => (
            <td
              className='recipe-name-text'
              key={index}
              onClick={() => handleRecipeClick(recipe)}
            >
              {recipe[tableHeaders.name]}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
