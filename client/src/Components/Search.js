import React from 'react';

function Search({search, setSearch}) {
    return (
        <div>
        <input
        className="search-bar"
          type="text"
          placeholder="Search experience"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <i>🔎</i>
            
        </div>
    );
}

export default Search;