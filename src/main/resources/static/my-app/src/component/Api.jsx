// api.js
const host = process.env.REACT_APP_HOST;
const BASE_URL = `http://${host}:8100/api/imdbMovie/`; // Replace with your API base URL
const yearAndgenre = 'getMovieByYearAndGenre?';
const ratingAndgenre = 'getMovieByRatingAndGenre?';
const paramDDLdata = [yearAndgenre, ratingAndgenre]
export const fetchData = async (ddlData, query) => {
  try {
    let response;

    if(ddlData === yearAndgenre)
      { 
        const {year , genre} = query;
        response = await fetch(`${BASE_URL}${ddlData}year=${year}&genre=${genre}`);
        console.log(response)
      }
    if(ddlData === ratingAndgenre)
      { 
        const {rating , genre} = query;
        response = await fetch(`${BASE_URL}${ddlData}ratingValue=${rating}&genre=${genre}`);
        console.log(response)
      }
    if (!paramDDLdata.includes(ddlData))
        {
          response = await fetch(`${BASE_URL}${ddlData}${encodeURIComponent(query)}`);
        }
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};