import './recipe_request.css';
import { useState } from 'react';

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
        <label>
          Choose Request
        </label>
        <select
            value={selectedRequest}
            onChange={handleRequestChange}
          >
            <option value="">Select an option</option>
            <option value="Meal 1">Meal 1</option>
            <option value="Meal 2">Meal 2</option>
            <option 
              value="Meal 3" 
              disabled={requestedMeals.includes("Meal 3")}
            >
              Meal 3
            </option>
          </select>
          <button onClick={handleRequestSubmit}>Add Request</button>
      </div>
      {requestedMeals.length > 0 && (
        <div>
          <div className="request-area">
            <label>
              Requested Meals
            </label>
          </div>
          <div className='request-area'>
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
