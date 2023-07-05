import './table_container.css';
import { WeekTable } from '../components/week_table.js';
import { ActionContainer } from './action_container';

export const TableContainer = ({ recipeClick, addRecipeClick }) => {
  return (
    <div className="table-container">
      <ActionContainer addRecipeClick={addRecipeClick} />
      <WeekTable recipeClick={ recipeClick} />
    </div>
  );
}