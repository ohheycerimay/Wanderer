import React from 'react';
import Search from './Search';
import Wander from './Wander.png';

function Home({search, setSearch}) {
    
    return (
        <div>
            <div className='search_div' div>
            
            <Search search={search} setSearch={setSearch}  />
        
        </div>
            <img className= 'logo' src={Wander} alt="Wander" />
        </div>
    );
}

export default Home;