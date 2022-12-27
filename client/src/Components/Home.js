import React from 'react';
import ExperiencesContainer from './ExperiencesContainer';
import Search from './Search';

function Home({experiences}) {
    
    return (
        <div>
            {/* <Search/> */}
            <ExperiencesContainer experiences = {experiences}/>
            
        </div>
    );
}

export default Home;