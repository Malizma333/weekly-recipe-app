import './recipe_request_container.css';
import { useState, useEffect } from 'react';

import { RecipeRequest } from '../components/pages/recipe_request';
import { loadData, saveData } from '../services/locals_retrieval';
import { dataKeys } from '../constants';

export const RecipeRequestContainer = ({ close }) => {
  const [selectedRequest, setSelectedRequest] = useState('');
  const [requestedMeals, setRequestedMeals] = useState([]);
  
  useEffect(() => {
    console.log(dataKeys.requests);
    const storedRequests = loadData(dataKeys.requests);
    console.log(storedRequests);
    if (storedRequests) {
      setRequestedMeals(storedRequests);
    }
  }, []);

  const handleRequestChange = (event) => {
    setSelectedRequest(event.target.value);
  };

  const handleRequestSubmit = (event) => {
    event.preventDefault();

    if (!selectedRequest) {
      return
    }

    let newRequestedMeals = null;

    if(!requestedMeals) {
      newRequestedMeals = [selectedRequest]
    } else {
      newRequestedMeals = [...requestedMeals, selectedRequest]
    }

    setRequestedMeals(newRequestedMeals)
    setSelectedRequest('');

    saveData(newRequestedMeals, dataKeys.requests);
  };

  const handleRemoveRequest = (index) => {
    const updatedMeals = [...requestedMeals];
    updatedMeals.splice(index, 1);
    setRequestedMeals(updatedMeals);
  };

  return (
    <div className="recipe-request-container">
      <div className="recipe-request-content">
        <h3>Recipe Request</h3>
        <RecipeRequest
          selectedRequest={selectedRequest}
          requestedMeals={requestedMeals}
          requestChange={handleRequestChange}
          requestSubmit={handleRequestSubmit}
          removeRequest={handleRemoveRequest}
        />
        <button className="close-btn" onClick={close}>
          X
        </button>
      </div>
    </div>
  );
};
