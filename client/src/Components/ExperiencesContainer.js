import React from 'react';
import ExperiencesCard from './ExperiencesCard';

function ExperiencesContainer({experiences}) {
    return (
        <div>
            {experiences.map((experience) => <ExperiencesCard key = {experience.id} experience = {experience}/>)}
        </div>
    );
}

export default ExperiencesContainer;