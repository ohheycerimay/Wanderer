import React from 'react';
import Search from './Search';
import Wander from './Wander.png';

function Home({search, setSearch}) {
    
    return (
        <div className="home">
        <img className= 'logo' src={Wander} alt="Wander" />
        <div className='search_div'>
        
            <Search search={search} setSearch={setSearch}  />
        
            </div>
        </div>
    );
}

export default Home;