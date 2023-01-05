import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'



function UserLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user),
        navigate("/"));
      } else {
        r.json().then((err) =>{
          console.log(err);
          setErrors(err.errors)}
          );
      }
    });
  }

  return (
    <form  className="login-form" onSubmit={handleSubmit}>
    
        <label htmlFor="username">Username</label>
        <input
          class="username"
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
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </button>

        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}

    </form>
  );
}

export default UserLogin;