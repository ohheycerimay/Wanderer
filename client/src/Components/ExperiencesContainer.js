import React from 'react';
import ExperiencesCard from './ExperiencesCard';
import Search from './Search';

function ExperiencesContainer({experiences, search, setSearch}) {

    return (
        <div>
            <Search search={search} setSearch={setSearch}/>
            {experiences.map((experience) => <ExperiencesCard key = {experience.id} experience = {experience}/>)}
        </div>
    );
}

export default ExperiencesContainer;