import React from 'react';
import {Link} from 'react-router-dom';


function NavBar({user, setUser}) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }
    return (
        <div className="nav">
            <Link to="/"> <span className="home-btn">Home</span></Link>
            <Link to="/search"> <span className="search">Search</span></Link>
            <Link to="/userlogin"> <span className="login">Login</span></Link>
            <button onClick={handleLogoutClick}>Logout</button>
            <Link to="/signup"> <span className="sign-up">Sign Up</span></Link>
        </div>
    );
}

export default NavBar;