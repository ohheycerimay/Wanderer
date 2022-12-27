import React, {useEffect, useState} from'react';
import Home from './Components/Home';
import './App.css';
import NavBar from './Components/NavBar';
import Search from './Components/Search';
import {Route, Routes} from 'react-router-dom';
import SignUp from './Components/SignUp';
import UserLogin from './Components/UserLogin';
import ExperienceShow from './Components/ExperienceShow';


function App() {
  const [experiences, setExperiences] = useState([])
  const [user, setUser] = useState(null)

  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  // if (!user) return <UserLogin onLogin={setUser} />;
  // useEffect(() => {
  //   fetch('/experiences')
  //   .then(res => res.json())
  //   .then(data => setExperiences(data))
  // }, []);


  useEffect(() => {
    async function fetchData() {
      const response1 = await fetch('/me');
      const user = await response1.json();
      setUser(user);
      console.log(user);
      const response2 = await fetch('/experiences');
      const experiences = await response2.json();
      setExperiences(experiences);
    }
    fetchData();
  }, []);


  return (
    <div>
      <NavBar user={user} setUser={setUser}/>
      <Search/>
      <Routes>
        <Route exact path="/" element={<Home experiences = {experiences}/>} />
        {/* <Home experiences = {experiences}/> */}
        <Route exact path="/signup" element={<SignUp onSignUp={setUser}/>}/>
        <Route exact path="/userlogin" element={<UserLogin onLogin={setUser}/>}/>
        <Route path="/experience/:id" element= {<ExperienceShow/>}/>  
        {/* <Route path="*" element={<NotFound />} /> */}

        
      </Routes>
    </div>

  )
}

export default App;
