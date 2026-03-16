import React from 'react';

const Dropdown = ({ onSelectChange }) => {
  const handleChange = (event) => {
    onSelectChange(event.target.value);
  };

  return (
    <div>
    <select onChange={handleChange}>
      <option value="">--Please choose an option--</option>
      <option value="1">Title</option>
      <option value="2">Actor</option>
      <option value="3">Director</option>
      <option value="5">Year</option>
      <option value="6">Rating&Genre</option>
      <option value="7">Year&Genre</option>
      <option value="8">Year&Rating</option>
    </select>
    </div>
  );
};

export default Dropdown;