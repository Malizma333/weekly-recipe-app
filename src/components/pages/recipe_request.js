import './recipe_request.css';
import { useState } from 'react';
import { recipeSheetData } from '../../utils/recipe_shuffler';
import { tableHeaders } from '../../constants';

export const RecipeRequest = () => {
  const [selectedRequest, setSelectedRequest] = useState('');
  const [requestedMeals, setRequestedMeals] = useState([]);

  const handleRequestChange = (event) => {
    setSelectedRequest(event.target.value);
  };

  const handleRequestSubmit = (event) => {
    event.preventDefault();
    if (selectedRequest && !requestedMeals.includes(selectedRequest)) {
      setRequestedMeals([...requestedMeals, selectedRequest]);
      setSelectedRequest('');
    }
  };

  const handleRemoveRequest = (index) => {
    const updatedMeals = [...requestedMeals];
    updatedMeals.splice(index, 1);
    setRequestedMeals(updatedMeals);
  };

  return (
    <div>
      <div className="request-area">
        <label>Choose Request</label>
        <select
          value={selectedRequest}
          onChange={handleRequestChange}
          disabled={requestedMeals.length >= 6}
        >
          <option value=''>Select Meal</option>
          {recipeSheetData.map((mealData, index) => (
            <option
              key={index}
              value={mealData[tableHeaders.name]}
              disabled={requestedMeals.includes(mealData[tableHeaders.name])}
            >
              {mealData[tableHeaders.name]}
            </option>
          ))}
        </select>
        <button onClick={handleRequestSubmit}>Add Request</button>
      </div>
      {requestedMeals.length > 0 && (
        <div>
          <div>
            <label>Requested Meals</label>
          </div>
          <div className='requested-list'>
            <ul>
              {requestedMeals.map((meal, index) => (
                <li key={index}>
                  {meal}
                  <button onClick={() => handleRemoveRequest(index)}>X</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
