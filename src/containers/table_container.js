import './table_container.css';
import { WeekTable } from '../components/week_table.js';

export const TableContainer = (handleMealClick) => {
  return (
    <div className="table-container">
      {WeekTable(handleMealClick)}
    </div>
  );
}