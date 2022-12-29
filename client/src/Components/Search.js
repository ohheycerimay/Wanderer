import React from 'react';
import {Link} from "react-router-dom"

function Search({search, setSearch}) {

  function handleSubmit(e) {
    e.preventDefault();
    search(setSearch);
  }
    return (
        <div>
        <input
        className="search-bar"
          type="text"
          placeholder="Search experience"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to="/experience">
         <button type="submit">Submit</button>
            </Link>
        </div>
    );
}

export default Search;