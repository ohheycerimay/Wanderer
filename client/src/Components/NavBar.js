import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function NavBar({user, setUser}) {
let navigate = useNavigate()
  // const [loggedIn, setLoggedIn] = useState(true);
  console.log(user)
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
            navigate("/")
          }
        });
      }

      console.log(user)
    return (
      <div>
        <div className="nav nav1">
          <NavLink className="button" to="/userlogin">Login</NavLink>
          {user ? <button className="button" onClick={handleLogoutClick}>Logout</button> : <> </>}
   
          <NavLink className="button" to="/signup">Sign Up</NavLink>
        </div>
        <div className="nav nav2">
          {user ? (
            <div>
          <img className = 'profile_pic' src={user.profile_pic} alt={user.username} /> 
          <h4> Hello, {user.username}</h4>
          </div>

           ): (
           <h4>Login or Signup</h4>)}
            <NavLink className="button" to="/">Home</NavLink>
            <NavLink className="button" to="/experience">Experiences</NavLink>
            <NavLink className="button" to="/create-experience"> Create Experience</NavLink>
            <NavLink className="button" to="/bookings"> My Bookings</NavLink>
            </div>
        </div>
    );
}

export default NavBar;