import React, { useState, useEffect } from 'react';
import Card from '../Rows';

const Search = ({ setSearch , scrollToCard, handleNoResults}) =>  {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/studs/books');
        const data = await response.json();
        setSearchResult(data.books ? data.books[''].name : '' );
                  
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Set the result based on the input term
    setSearchResult(term);
  };

  const handleEnterPress = (event) => {
    // Check if the key pressed is Enter
    if (event.key === 'Enter') {
      setSearch(searchResult);
      if (!searchResult) {
        handleNoResults();
      }
      else {
      scrollToCard();
      }
    }
  };
  

  const handleSearchClick = () => {
    // Set the search term when the button is clicked
    setSearch(searchResult);
    if (!searchResult) {
      handleNoResults();
        console.log('No results callback invoked');
        handleNoResults();
     } 
    else {
    scrollToCard();
    }
  };



    // // If no results, call the callback function

  


  return (
    <>
      <div>
        <input
          className="search"
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleEnterPress}
          placeholder="Search.."
        />
        <button type="submit" onClick={handleSearchClick}>
          <i className="fa fa-search" />
        </button>
      </div>

      {/* Result Section */}
      {searchResult && (
        <div>
          <h4>Search Result:</h4>
          <p>{searchResult}</p>
        </div>
      )}
    </>
  
  )};

export default Search;
