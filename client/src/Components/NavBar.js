// import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
// import { useState } from 'react';


function NavBar({user}) {

  // const [loggedIn, setLoggedIn] = useState(false);
 
  
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
          <NavLink className="navlink" to="/">Home</NavLink>
          <NavLink className="navlink" to="/experiences">Experiences</NavLink>
          <>
        </>
          <>
          <NavLink className="navlink" to="/userlogin">Login</NavLink>
          <NavLink className="navlink" to="/signup">Sign Up</NavLink>
          <NavLink className="navlink" to="/logout">Logout</NavLink> 
          </>

        </nav>
    </>
    )
}

export default NavBar;

