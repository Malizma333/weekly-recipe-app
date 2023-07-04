import './meal_details.css';
import { tableHeaders } from '../constants';

export const MealDetails = (selectedMeal) => {
  return (
    <div>
      <h3>{selectedMeal.name}</h3>
      <p>Description: {selectedMeal[tableHeaders[1]]}</p>
      <p>Allergies: {selectedMeal[tableHeaders[2]]}</p>
      <a href={selectedMeal[tableHeaders[3]]} target="_blank" rel="noopener noreferrer">
        Recipe Instructions
      </a>
    </div>
  )
}
