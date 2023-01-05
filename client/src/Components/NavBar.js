// import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import { useState } from 'react';


function NavBar({user}) {

  // const [loggedIn, setLoggedIn] = useState(false);
  console.log(user)
  
    return (
      <>
      <div>
      {user ? (
        <div className = 'profile_container'>
      <img className = 'profile_pic' src={user.profile_pic} alt={user.username} /> 
      <h4 className='profile_greeting'>{user.username}</h4>
    
      </div>
    
    ): (
      <div></div>)}
          </div>

          <nav className='navMenu'>
          <NavLink className="button" to="/">Home</NavLink>
          <NavLink className="button" to="/experiences">Experiences</NavLink>
        {user? (  
          <>
        <NavLink className="button" to="/create-experience">Create an Experiences</NavLink>
        <NavLink className="button" to="/logout">Logout</NavLink> 
        </>
        ):(
          <>
          <NavLink className="button" to="/userlogin">Login</NavLink>
          <NavLink className="button" to="/signup">Sign Up</NavLink>
          </>
        )}

        </nav>
    </>
    )
}

export default NavBar;

/* <div className = 'nav_div'>
<div className="nav nav1">
  <NavLink className="button" to="/userlogin">Login</NavLink>
  {user ? <button className="button" onClick={handleLogoutClick}>Logout</button> : <> </>}

  <NavLink className="button" to="/signup">Sign Up</NavLink>
</div>
<div className="nav nav2">
  {user ? (
    <div className = 'profile_container'>
  <img className = 'profile_pic' src={user.profile_pic} alt={user.username} /> 
  <h4 className='profile_greeting'> Hello, {user.username}</h4>
  </div>

  ): (
  <h4>Login or Signup</h4>)}
    <NavLink className="button" to="/">Home</NavLink>
    <NavLink className="button" to="/experience">Experiences</NavLink>
    <NavLink className="button" to="/create-experience"> Create Experience</NavLink>
    <NavLink className="button" to="/bookings"> My Bookings</NavLink>
    </div>
</div> */