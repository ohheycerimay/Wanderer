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
        <div>
            <h1>Are you sure you want to logout?</h1>
            <button onClick={handleLogoutClick}>Logout</button>
        </div>
    );
}

export default LogoutPage;