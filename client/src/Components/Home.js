import React from 'react';
import Search from './Search';


function Home({search, setSearch}) {
    
    return (
        <div>
            <Search search={search} setSearch={setSearch}  />
           
            
        </div>
    );
}

export default Home;