import React from 'react';

function ExperiencesCard({experience}) {
    return (
        <div>
            <div>
                <img className='tile_image' src={experience.image_url} alt={experience.name} />
                <h3>{experience.name}</h3>
                <h4>{experience.location}</h4>
                <h5>{experience.price}</h5>
                <h2>{experience.likes}</h2>
                <p>{experience.description}</p>

            </div>
        </div>
    );
}

export default ExperiencesCard;