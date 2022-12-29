import React from 'react';
import ExperiencesContainer from './ExperiencesContainer';
import Search from './Search';
import { useNavigate } from 'react-router-dom';

function Home({search, setSearch}) {

    const navigate = useNavigate()

function onSubmit() {
  // Submit form results
  navigate("/experiences", { replace: true, state: {setSearch}})
}

    
    return (
        <div>
            <Search search={search} setSearch={setSearch} onClick={onSubmit} />
           
            
        </div>
    );
}

export default Home;