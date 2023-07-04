import './App.css';
import React, { useState } from 'react';

const mealsData = [
  {
    name: 'Oatmeal',
    description: 'A healthy and nutritious breakfast option.',
    allergies: ['Gluten', 'Nuts'],
    recipeLink: 'https://www.example.com/oatmeal-recipe',
  },
  {
    name: 'Chicken Salad',
    description: 'A refreshing and protein-packed salad.',
    allergies: ['Dairy'],
    recipeLink: 'https://www.example.com/chicken-salad-recipe',
  },
  {
    name: 'Oatmeal',
    description: 'A healthy and nutritious breakfast option.',
    allergies: ['Gluten', 'Nuts'],
    recipeLink: 'https://www.example.com/oatmeal-recipe',
  },
  {
    name: 'Chicken Salad',
    description: 'A refreshing and protein-packed salad.',
    allergies: ['Dairy'],
    recipeLink: 'https://www.example.com/chicken-salad-recipe',
  },
  {
    name: 'Oatmeal',
    description: 'A healthy and nutritious breakfast option.',
    allergies: ['Gluten', 'Nuts'],
    recipeLink: 'https://www.example.com/oatmeal-recipe',
  },
  {
    name: 'Chicken Salad',
    description: 'A refreshing and protein-packed salad.',
    allergies: ['Dairy'],
    recipeLink: 'https://www.example.com/chicken-salad-recipe',
  },
  {
    name: 'Oatmeal',
    description: 'A healthy and nutritious breakfast option.',
    allergies: ['Gluten', 'Nuts'],
    recipeLink: 'https://www.example.com/oatmeal-recipe',
  }
];

function App() {
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
  };

  return (
    <div className="App">
      <header className="App-header">
        <table className='week-table'>
          <thead>
            <tr>
              <th>Sunday</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {mealsData.map((meal, index) => (
                <td key={index} onClick={() => handleMealClick(meal)}>
                  {meal.name}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
        {selectedMeal && (
          <div>
            <h3>{selectedMeal.name}</h3>
            <p>Description: {selectedMeal.description}</p>
            <p>Allergies: {selectedMeal.allergies.join(', ')}</p>
            <p>
              Recipe Link:{' '}
              <a href={selectedMeal.recipeLink} target="_blank" rel="noopener noreferrer">
                {selectedMeal.recipeLink}
              </a>
            </p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
