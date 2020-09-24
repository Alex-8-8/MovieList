import React from 'react';

export const SearchNameInput = ({ onInputChange }) => (
  <div className="search-input w-25">
    <label htmlFor="searchTitle">Search by actor name</label>
    <div className="input-group mb-3 mr-3">
      <input
        id="searchTitle"
        className="form-control"
        onChange={onInputChange}
      />
    </div>
  </div>
);
