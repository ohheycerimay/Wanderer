import React from 'react';
import{Link} from "react-router-dom";
function ExperiencesCard({experience}) {
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
            </div>
        </div>
    );
}

export default ExperiencesCard;