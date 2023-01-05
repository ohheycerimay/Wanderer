import React from 'react';
import { useNavigate } from 'react-router-dom'
function LogoutPage({user, setUser}) {
    let navigate = useNavigate()

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
        <div className="logout">
            <h1>Are you sure you want to log out?</h1>
            <button className="logout-button" onClick={handleLogoutClick}>Log Out</button>
        </div>
    );
}

export default LogoutPage;