import './table_container.css';
import { WeekTable } from '../components/week_table.js';
import { ShuffleButton } from '../components/shuffle_button';

export const TableContainer = (handleMealClick) => {
  return (
    <div className="table-container">
      {ShuffleButton()}
      {WeekTable(handleMealClick)}
    </div>
  );
}