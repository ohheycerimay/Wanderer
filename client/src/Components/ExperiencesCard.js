import React, {useState} from 'react';
import{Link} from "react-router-dom";

const headers = {
    Accepts: "application/json",
          "Content-Type" : "application/json"}

function ExperiencesCard({experience, onDelete}) {

    const [experienceData, setExperienceData] = useState(experience)

    function updateLikes() {
        fetch(`experiences/${experience.id}`, {
          method: "PATCH",
          headers,
          body: JSON.stringify({ likes: ++experience.likes }),
        }).then((r) =>r.json())
        .then(((data)=>{
            setExperienceData({...data})
        }))
    }

    function handleDelete(id){
        onDelete(id)
        fetch(`experiences/${id}`,{
            method: 'DELETE',
            headers,
        })
    }

    return (
        <div className='card-container'>
            <div className='card'>
            <Link to = {`experience/${experience.id}`}>
            <img className='tile_image' src={experience.image_url} alt={experience.name} />
            </Link>
                <h3>{experience.name}</h3>
                <h4>{experience.location}</h4>
                <h5>${experience.price}</h5>
                <h6>{experience.likes}likes</h6>
                <button onClick={()=>updateLikes(experienceData)}className="like-button"> + ⛴️</button>
                <button className="button-85"onClick={()=>handleDelete(experience.id)}>🗑</button> 
            </div>
        </div>
    );
}

export default ExperiencesCard;