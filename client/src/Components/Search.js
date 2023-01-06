import React from 'react';
import {Link} from "react-router-dom"
import magnify from './magnify.png';
function Search({search, setSearch}) {

  function handleSubmit() {
    setSearch('');
  }

  // clear search bar after submit
  


    return (
        <div className='search-bar'>
        <input
        className="search-bar"
          type="text"
          placeholder="Search experiences"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to="/experiences"> 
        <button onSubmit={handleSubmit} type="submit" className='search-icon'><img src = {magnify} alt = 'search'/></button>
            </Link>
        </div>
    );
}

export default Search;