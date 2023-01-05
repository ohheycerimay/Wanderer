
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from './CommentForm';
// import CommentContainer from './CommentContainer';

function ExperienceShow({user}) {


    const {id} = useParams();

    const [experience, setExperience] = useState();
    
    useEffect(() => {
        fetch(`/experiences/${id}`)
        .then(response => response.json())
        .then(data => {
            setExperience({...data})
        })
    },[id])

    return (

        <div>
            {experience && <div>
            <img className='tile_image' src={experience.image_url} alt={experience.name} />
                <h3>{experience.name}</h3>
                <h4>{experience.location}</h4>
                <h5>${experience.price}</h5>
                <h2>{experience.likes} Likes</h2>
                <p>{experience.description}</p>
            </div>}
            <div>
            {experience && experience.posts.map(post => <p className="comments-section">{post.comment}</p>)}
            </div>
            <CommentForm user={user} experience={experience} setExperience={setExperience}/>
        </div>
    );
}

export default ExperienceShow;