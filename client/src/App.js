import React, {useEffect, useState} from'react';
import Home from './Components/Home';
import './App.css';

function App() {
  const [experiences, setExperiences] = useState([])
  useEffect(() => {
    fetch('/experiences')
    .then(res => res.json())
    .then(data => setExperiences(data))
  }, [])




  return (
    <div>
      <Home experiences = {experiences}/>

    </div>
  )
}

export default App;
