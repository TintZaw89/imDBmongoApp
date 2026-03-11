
import React,{ useState} from 'react';
import MyForm from './MyForm';
import { fetchData } from './Api';
import MyDropdown from './DropDownList';
import GenreList from './GenreList';
import { selectData } from './SelectedValue';
import Pagination from './Pagination';
import MovieTable from './MovieTable';
import RatingList from './RatingList';
import YearList from './YearList';

function FetchData() {
	  const [data, setData] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');
    const [currentPage,setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)
    const handleDropdownChange = (value) => {
    setSelectedValue(value);
  };
    const [dropdownGenre, setDropdownGenre] = useState('');
    const handleDropdownGenreChange = (value) => {
    setDropdownGenre(value);
  };
    const [dropdownRating, setDropdownRating] = useState('');
    const handleDropdownRatingChange = (value) => {
    setDropdownRating(value);
  };
    const [dropdownYear, setDropdownYear] = useState('');
    const handleDropdownYearChange = (value) => {
    setDropdownYear(value);
  };

    const handleSearch = async ( query) => {
    try {
        
        var ddlData = selectData (selectedValue);
        var data;
        if(query === '') {query = '000000'}
        if (selectedValue === '7')
          {
            const ddlvaluelist = {year: dropdownYear, genre: dropdownGenre}
            //console.log(ddlvaluelist)
            data = await fetchData(ddlData, ddlvaluelist);
          }
        if (selectedValue === '6')
          {
            const ddlvaluelist = {rating: dropdownRating, genre: dropdownGenre}
            console.log(ddlvaluelist)
            data = await fetchData(ddlData, ddlvaluelist);
          }
        if (!['6','7'].includes(selectedValue))
          {
            if(selectedValue === '5')
            {
              query = dropdownYear
            }
            data = await fetchData(ddlData, query);
          }
        setData(data);
        setCurrentPage(1);
    } catch (error) {
      setData({ error: "Failed to fetch data." });// Handle error, e.g., display an error message
    }
  };
    const lastPostIndex = currentPage * postsPerPage;
    const fistPostIndex = lastPostIndex - postsPerPage;    
    const currentPosts = data?.slice(fistPostIndex, lastPostIndex)
    let movieSize;
    if (!data.length === null || !data.length === "" || data.length > 1 ) 
        movieSize = "s";

	return (

	<div className='container'>
        <div>
        Search Movie Criteria: <MyDropdown onSelectChange={handleDropdownChange} /> 
         {
          (selectedValue === '5' || selectedValue === '7') && (
            <div>
              <YearList onValueChange={handleDropdownYearChange}/>
            </div>
          )
        }
        { selectedValue === '6' && (
          
        <div>
        <RatingList onValueChange={handleDropdownRatingChange}/>
        </div>

        )
        }
        {
          (selectedValue === '6' || selectedValue === '7') && (
            <div>
               <GenreList onValueChange={handleDropdownGenreChange}/>
            </div>
          )
        }
       
        <MyForm onSearch={handleSearch} value={selectedValue}/>
        </div>
		<div className='mt-3'>
		<h1 className="text-center">IMDb Movie Query</h1>
    <div>
        <MovieTable movies={currentPosts} page={currentPage}/>    
        Total Record{movieSize}: {data?.length}{setPostsPerPage}
        <Pagination totalPosts={data?.length}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    curentPage={currentPage}
        />
    </div>
		</div>
	</div>

	)
}
export default FetchData
