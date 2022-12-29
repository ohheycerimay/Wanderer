import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';


function NavBar({user, setUser}) {

  const [loggedIn, setLoggedIn] = useState(true);
  console.log(user)
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }
    return (
      <div>
        <div className="nav nav1">
          <NavLink className="button" to="/userlogin">Login</NavLink>
          <button className="button" onClick={handleLogoutClick}>Logout</button>
          <NavLink className="button" to="/signup">Sign Up</NavLink>
        </div>
        <div className="nav nav2">
          {/* {loggedIn ? <h4> Hello, {user.username}</h4> : <h4>Login or Signup</h4>}
            <img className = 'profile_pic' src={user.profile_pic} alt="{user.username}" /> */}
            <NavLink className="button" to="/">Home</NavLink>
            <NavLink className="button" to="/experience">Experiences</NavLink>
            <NavLink className="button" to="/create-experience"> Create Experience</NavLink>
            <NavLink className="button" to="/bookings"> My Bookings</NavLink>
            </div>
        </div>
    );
}

export default NavBar;