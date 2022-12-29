import React from 'react';
import ExperiencesContainer from './ExperiencesContainer';
import Search from './Search';


function Home({search, setSearch}) {
    
    return (
        <div>
            <Search search={search} setSearch={setSearch}  />
           
            
        </div>
    );
}

export default Home;