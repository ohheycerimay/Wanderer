
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from './CommentForm';
// import CommentContainer from './CommentContainer';

function ExperienceShow() {
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
            <div>
                <div>
                <h1>{experience.name}</h1>
                </div>
                <div>
                <div>
                <p>{experience.description}</p>
                <p>{experience.likes} Likes</p>
                </div>
                <div>
                <p>{experience.location}</p>
                </div>
                <div>
                <p>${experience.price}</p>
                </div>
                </div>
                </div>
            </div>}
            <div>
            {experience && experience.posts.map(post => <p className="comments-section">{post.comment}</p>)}
            </div>
            <CommentForm experience={experience} setExperience={setExperience}/>
        </div>
    );
}

export default ExperienceShow;