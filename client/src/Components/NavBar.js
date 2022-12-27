import React, {useState} from 'react';
import {Link} from 'react-router-dom';


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
        <div className="nav">
          {/* {loggedIn ? <h4> Hello, {user.username}</h4> : <h4>Login or Signup</h4>}
            <img className = 'profile_pic' src={user.profile_pic} alt="{user.username}" /> */}
            <Link to="/"> <span className="home-btn">Home</span></Link>
            <Link to="/userlogin"> <span className="login">Login</span></Link>
            <button onClick={handleLogoutClick}>Logout</button>
            <Link to="/signup"> <span className="sign-up">Sign Up</span></Link>
            </div>
        </div>
    );
}

export default NavBar;