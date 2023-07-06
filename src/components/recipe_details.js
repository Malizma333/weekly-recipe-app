import './recipe_details.css';
import { tableHeaders } from '../constants';

export const RecipeDetails = ({ selectedRecipe }) => {
  return (
    <div className='recipe-details'>
      <div className='header-container'>
        <h3>{selectedRecipe[tableHeaders[0]]}</h3>
        <DurationContainer duration={ selectedRecipe[tableHeaders[4]] } />
      </div>
      <p>{selectedRecipe[tableHeaders[1]]}</p>
      <AllergensList allergensString={ selectedRecipe[tableHeaders[2]] } />
      <RecipeLink link={ selectedRecipe[tableHeaders[3]] } />
    </div>
  )
}

const DurationContainer = ({ duration }) => {
  if(!duration || duration.length === 0) return;
  
  return (
    <div className='duration-container'>
      <img
        src={`${process.env.PUBLIC_URL}/icons/time_icon.svg`}
        alt="Time Icon"
        className='time-icon'
      />
      <p>{duration}</p>
    </div>
  )
}

const AllergensList = ({ allergensString }) => {
  if(!allergensString || allergensString.length === 0) return;

  const allergens = allergensString.split(',')
    .filter(part => part.trim() !== '');
  
  return (
    <div>
      <p>Allergens</p>
      <ul className='allergen-list'>
        {allergens.map((allergen, index) => (
          <li key={index}>
            {allergen}
          </li>
        ))}
      </ul>
    </div>
  )
}

const RecipeLink = ({ link }) => {
  if(!link || link.length === 0) return;

  return <a href={link} target="_blank" rel="noopener noreferrer">
    Recipe Instructions
  </a>
}
