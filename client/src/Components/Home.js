import React from 'react';
import Search from './Search';


function Home({search, setSearch}) {
    
    return (
        <div className='search_div' div>
            <h2>Start your journey!</h2>
            <Search search={search} setSearch={setSearch}  />
        
            
        </div>
    );
}

export default Home;