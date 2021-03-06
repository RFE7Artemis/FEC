import React from 'react';
import ReactDOM from 'react-dom';
import QuestionsAnswers from './QuestionsAnswers.jsx';
import { BsSearch } from 'react-icons/bs';


const SearchBar = ({ search, question, handleSearchChange }) => {


  return (
    <div className="search-container">
      <form action="/action_page.php">
        <input type="search" className='q-search-bar' onChange={handleSearchChange} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." name="search" />
        <button type="button" className="search-button">
          {<BsSearch />}
        </button>
      </form>
    </div>
  )
}

export default SearchBar;
