import React from 'react';
import ExperiencesCard from './ExperiencesCard';
// import Search from './Search';
import CreateExperience from './CreateExperience'

function ExperiencesContainer({experiences,setExperiences, onDelete}) {
    console.log(experiences);
    return (
        <div>
            {/* <Search search={search} setSearch={setSearch}/> */}
            <CreateExperience experiences={experiences} setExperiences={setExperiences}/>
            <div className='cards_container'>
            {experiences.map((experience) => <ExperiencesCard key = {experience.id} experience = {experience} experienceData = {experiences} setExperienceData= {setExperiences} onDelete={onDelete}/>)}
            </div>
        </div>
    );
}

export default ExperiencesContainer;