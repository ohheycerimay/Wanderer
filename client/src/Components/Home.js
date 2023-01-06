import React from 'react';
import Search from './Search';
import Wander from './Wander.png';

function Home({search, setSearch}) {
    
    return (
        <div className="home">
        
        <div className='search_div'>


            <img className= 'logo' src={Wander} alt="Wander" />
        
            
            <Search search={search} setSearch={setSearch}  />
        
            </div>
        </div>
    );
}

export default Home;