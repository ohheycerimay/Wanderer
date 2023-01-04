import React from 'react';
import {Link} from "react-router-dom"
import magnify from './magnify.png';
function Search({search, setSearch}) {

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   search(setSearch);
  // }
    return (
        <div className='search'>
        <input
        className="search-bar"
          type="text"
          placeholder="Search experiences"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to="/experiences"> 
        <button type="submit" className='search-btn'><img src = {magnify} alt = 'search'/></button>
            </Link>
        </div>
    );
}

export default Search;