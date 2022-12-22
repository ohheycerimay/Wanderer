import React from 'react';
import ExperiencesContainer from './ExperiencesContainer';

function Home({experiences}) {
    return (
        <div>
            <ExperiencesContainer experiences = {experiences}/>
            
        </div>
    );
}

export default Home;