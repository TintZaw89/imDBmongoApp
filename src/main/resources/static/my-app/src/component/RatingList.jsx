import React, { useState } from 'react';

const RatingList = (props) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
        const value = event.target.value;
        setSelectedValue(event.target.value);
        props.onValueChange(value);
  };

  return (
    <div>
      <select value={selectedValue} onChange={handleChange}>
        <option value="">-- Please Choose Rating --</option>
        <option value="1">1.0~1.9</option>
        <option value="2">2.0~2.9</option>
        <option value="3">3.0~3.9</option>
        <option value="4">4.0~4.9</option>
        <option value="5">5.0~5.9</option>
        <option value="6">6.0~6.9</option>
        <option value="7">7.0~7.9</option>
        <option value="8">8.0~8.9</option>
        <option value="9">9.0~9.9</option>
        <option value="10">10</option>
      </select>
    </div>
  );
}

export default RatingList;