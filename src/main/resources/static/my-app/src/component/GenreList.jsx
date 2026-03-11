import React, { useState } from 'react';

const GenreList = (props) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(event.target.value);
    props.onValueChange(value);
    //console.log("Selected value:", event.target.value);
  };

  return (
    <div>
      <select value={selectedValue} onChange={handleChange}>
        <option value="">-- Please Choose Genre --</option>
        <option value="Action">Action</option>
        <option value="Adult">Adult</option>
        <option value="Adventure">Adventure</option>
        <option value="Animation">Animation</option>
        <option value="Biography">Biography</option>
        <option value="Comedy">Comedy</option>
        <option value="Crime">Crime</option>
        <option value="Documentary">Documentary</option>
        <option value="Drama">Drama</option>
        <option value="Family">Family</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Film-Noir">Film-Noir</option>
        <option value="Game-Show">Game-Show</option>
        <option value="History">History</option>
        <option value="Horror">Horror</option>
        <option value="Music">Music</option>
        <option value="Musical">Musical</option>
        <option value="Mystery">Mystery</option>
        <option value="News">News</option>
        <option value="Reality-TV">Reality-TV</option>
        <option value="Romance">Romance</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Short">Short</option>
        <option value="Sport">Sport</option>
        <option value="Talk-Show">Talk-Show</option>
        <option value="Thriller">Thriller</option>
        <option value="War">War</option>
        <option value="Western">Western</option>
      </select>
    </div>
  );
}

export default GenreList;