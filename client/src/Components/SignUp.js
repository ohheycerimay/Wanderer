import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

function SignUp({onSignUp}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [profile_pic, setProfilePic] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
console.log(errors)

let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        // password_confirmation: passwordConfirmation,
        profile_pic: profile_pic,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onSignUp(user),
        navigate('/'));
      } else {
        r.json().then((err) => {
          console.log(err)
          setErrors(err.errors) 
          
        });
        
      
      }
    });
  }

  return (
    <form class="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
  
      
        <label htmlFor="password">Password</label>
        <input
          class="password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
  

        <label htmlFor="password_confirmation">Password Confirmation</label>
        <input
          class="password-confirmation"
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
    
        <label htmlFor="profile_pic">Profile Image</label>
        <input
          class="profile-pic"
          type="text"
          id="profile_pic"
          value={profile_pic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
    

        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>

        {/* {errors.map((err) => (
          <error key={err}>{err}</error>
        ))} */}

    </form>
  );
}

export default SignUp;