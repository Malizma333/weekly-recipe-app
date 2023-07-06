import React from 'react';

export const FormButtons= ({ handleFormSubmit, handleFormCancel }) => (
  <div className="form-row">
    <button type="submit">Add</button>
    <button type="button" onClick={handleFormCancel}>
      Cancel
    </button>
  </div>
);
