// MyForm.js
import React, { useState } from 'react';
function MyForm({ onSearch, value }) {
  const [inputValue, setInputValue] = useState('');
  const ddlValue = value;
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const ddlIds = ['5','6','7','8'];
  const handleClick = () => {
    onSearch(inputValue); // Pass the input value to the parent or a handler
  };

  return (
    <div>
      {!ddlIds.includes(ddlValue) && (<input type="text" value={inputValue} onChange={handleChange} />)}
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default MyForm;