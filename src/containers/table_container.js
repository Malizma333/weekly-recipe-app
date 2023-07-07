import './table_container.css';
import { WeekTable } from '../components/week_table.js';

export const TableContainer = ({ setRecipe, mealSchedule, setMealSchedule }) => {
  return (
    <div className="table-container">
      <WeekTable
        setRecipe={ setRecipe }
        mealSchedule={ mealSchedule }
        setMealSchedule={ setMealSchedule }
      />
    </div>
  );
}