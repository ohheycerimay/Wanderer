import React, {useEffect, useState} from'react';
import Home from './Components/Home';
import './App.css';
import NavBar from './Components/NavBar';
import Search from './Components/Search';
import {Route, Routes} from 'react-router-dom';
import SignUp from './Components/SignUp';
import UserLogin from './Components/UserLogin';



function App() {
  const [experiences, setExperiences] = useState([])
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('/experiences')
    .then(res => res.json())
    .then(data => setExperiences(data))
  }, [])




  return (
    <div>
      <NavBar/>
      <Search/>
      <Routes>
        <Route exact path="/" element={<Home experiences = {experiences}/>} />
        {/* <Home experiences = {experiences}/> */}
        <Route exact path="/signup" element={<SignUp onSignUp={setUsers}/>}/>
        <Route exact path="/userlogin" element={<UserLogin onLogin={setUsers}/>}/>
      </Routes>
    </div>

  )
}

export default App;
