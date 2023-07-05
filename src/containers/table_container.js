import './table_container.css';
import { WeekTable } from '../components/week_table.js';
import { ActionContainer } from './action_container';

export const TableContainer = (handleRecipeClick) => {
  return (
    <div className="table-container">
      {ActionContainer()}
      {WeekTable(handleRecipeClick)}
    </div>
  );
}