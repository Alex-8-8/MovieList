import React from 'react';

export const SearchTitleInput = ({ onInputChange }) => (
  <div className="search-input mr-3 w-25">
    <label htmlFor="searchTitle">Search by title</label>
    <div className="input-group mb-3">
      <input
        id="searchTitle"
        className="form-control"
        onChange={onInputChange}
      />
    </div>
  </div>
);
