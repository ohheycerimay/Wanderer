import React from 'react';
import ExperiencesCard from './ExperiencesCard';
import Search from './Search';

function ExperiencesContainer({experiences, search, setSearch, onDelete}) {

    return (
        <div>
            <Search search={search} setSearch={setSearch}/>
            <div className='cards_container'>
            {experiences.map((experience) => <ExperiencesCard key = {experience.id} experience = {experience} onDelete={onDelete}/>)}
            </div>
        </div>
    );
}

export default ExperiencesContainer;