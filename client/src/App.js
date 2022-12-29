import React, {useEffect, useState} from'react';
import Home from './Components/Home';
import './App.css';
import NavBar from './Components/NavBar';
import Search from './Components/Search';
import {Route, Routes} from 'react-router-dom';
import SignUp from './Components/SignUp';
import UserLogin from './Components/UserLogin';
import ExperienceShow from './Components/ExperienceShow';
import ExperiencesContainer from './Components/ExperiencesContainer';
import CreateExperience from './Components/CreateExperience';
import NotFound from './Components/NotFound';
import Booking from './Components/Booking';


function App() {
  const [experiences, setExperiences] = useState([])
  const [user, setUser] = useState(null)
  const [search, setSearch] = useState('')
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response1 = await fetch('/me');
      const user = await response1.json();
      setUser(user);
      // console.log(user);
      const response2 = await fetch('/experiences');
      const experiences = await response2.json();
      console.log(experiences);
    }
    fetchData();
  }, []);

  const searchFilter = experiences.filter((eachExperience) => eachExperience.location.toLowerCase().includes(search.toLowerCase()) ||
  eachExperience.name.toLowerCase().includes(search.toLowerCase())); 

  function handleDeleteExperience(id) {
    const updateExperienceArray = experiences.filter(experience => experience.id !== id)
    setExperiences(updateExperienceArray)
  }

  useEffect(()=>{
    fetch("/me")
    .then(response => response.json())
    .then(data => console.log(data))
  },[])





  return (
    <div>
      <NavBar user={user} setUser={setUser}/>

      <Routes>
        <Route exact path="/" element={<Home search={search} setSearch={setSearch} />} />
        {/* <Home experiences = {experiences}/> */}
        <Route exact path="/signup" element={<SignUp onSignUp={setUser}/>}/>
        <Route exact path="/userlogin" element={<UserLogin onLogin={setUser}/>}/>
        <Route path="/experience" element={<ExperiencesContainer experiences={searchFilter} search={search} setSearch={setSearch} onDelete={handleDeleteExperience}/>}/>
        <Route path="/experience/experience/:id" element= {<ExperienceShow />}/>  
        <Route path="/create-experience" element= {<CreateExperience experiencesData={experiences} setExperiencesData={setExperiences} />}/>  
        <Route path="*" element={<NotFound />} />
        <Route path="/bookings" element={<Booking/>}/>
        <Route path="*" element={<NotFound />} />

        
      </Routes>
    </div>

  )
}

export default App;
