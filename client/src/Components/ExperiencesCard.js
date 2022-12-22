import React from 'react';

function ExperiencesCard({experience}) {
    return (
        <div>
            <div>
                <img className='tile_image' src={experience.image_url} alt={experience.name} />
                <h3>{experience.name}</h3>
                <h4>{experience.location}</h4>
                <h6>{experience.price}</h6>
                <p>{experience.description}</p>

            </div>
        </div>
    );
}

export default ExperiencesCard;