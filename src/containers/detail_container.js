import './detail_container.css';
import { MealDetails } from '../components/meal_details.js';

export const DetailContainer = (selectedMeal) => {
  return (
    <div className="detail-container">
      {selectedMeal && MealDetails(selectedMeal)}
    </div>
  );
}