import React from 'react';
import ExperiencesCard from './ExperiencesCard';
import Search from './Search';
import CreateExperience from './CreateExperience'

function ExperiencesContainer({experiences,setExperiences, search, setSearch, onDelete}) {
    console.log(experiences);
    return (
        <div>
            <Search search={search} setSearch={setSearch}/>
            <CreateExperience experienceData = {experiences} setExperienceData= {setExperiences} />
            <div className='cards_container'>
            {experiences.map((experience) => <ExperiencesCard key = {experience.id} experience = {experience} experienceData = {experiences} setExperienceData= {setExperiences} onDelete={onDelete}/>)}
            </div>
        </div>
    );
}

export default ExperiencesContainer;