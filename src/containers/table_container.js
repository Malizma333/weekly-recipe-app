import './table_container.css';
import { WeekTable } from '../components/week_table.js';

export const TableContainer = ({ recipeClick }) => {
  return (
    <div className="table-container">
      <WeekTable recipeClick={ recipeClick} />
    </div>
  );
}