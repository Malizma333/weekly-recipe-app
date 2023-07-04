import './meal_details.css';
import { tableHeaders } from '../constants';

export const MealDetails = (selectedMeal) => {
  const allergens = selectedMeal[tableHeaders[2]].split(',')

  return (
    <div className='meal-details'>
      <div className='header-container'>
        <h3>{selectedMeal[tableHeaders[0]]}</h3>
        {DurationContainer(selectedMeal)}
      </div>
      <p>{selectedMeal[tableHeaders[1]]}</p>
      <p>Allergens</p>
      <ul className='allergen-list'>
        {allergens.map((allergen, index) => (
          <li key={index}>
            {allergen}
          </li>
        ))}
      </ul>
      <a href={selectedMeal[tableHeaders[3]]} target="_blank" rel="noopener noreferrer">
        Recipe Instructions
      </a>
    </div>
  )
}

const DurationContainer = (selectedMeal) => {
  return (
    <div className='duration-container'>
      <img
        src={`${process.env.PUBLIC_URL}/time_icon.png`}
        alt="Time Icon"
        className='time-icon'
      />
      <p>{selectedMeal[tableHeaders[4]]}</p>
    </div>
  )
}
