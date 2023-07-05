import './detail_container.css';
import { MealDetails } from '../components/meal_details.js';
import { WelcomeScreen } from '../components/welcome_screen';

export const DetailContainer = (selectedMeal) => {
  return (
    <div className="detail-container">
      {selectedMeal && MealDetails(selectedMeal)}
      {!selectedMeal && WelcomeScreen()}
    </div>
  );
}