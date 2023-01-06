
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from './CommentForm';
// import CommentContainer from './CommentContainer';


const headers = {
    Accepts: "application/json",
        "Content-Type" : "application/json"}

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

    
    
    function handleDeleteComment(id) {
        const updateCommentArray = experience.posts.filter(comment => comment.id !== id)
        setExperience({...experience, posts: updateCommentArray})
      }
    
    function handleDelete(id){
        handleDeleteComment(id)
        fetch(`/posts/${id}`,{
            method: 'DELETE',
            headers,
        })
    }

    
    function updateCommentLikes(post) {
        fetch(`/posts/${post.id}`, {
        method: "PATCH",
        headers,
        body: JSON.stringify({ likes: ++post.likes }),
        }).then((r) => r.json())
        .then((freshPost) => {
            const newPostArray = experience.posts.map((p) => p.id !== freshPost.id ? p : freshPost);
            setExperience({ ...experience, posts: newPostArray });
        });
    }


    


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
                {experience && experience.posts.map(post => <div className="comment"><p>{post.comment}</p><p>{post.likes}</p>
                <button onClick={()=>handleDelete(post.id)}>DELETE COMMENT</button>   <button onClick={()=>updateCommentLikes(post)}>Like</button>
                </div>)}
            </div>
            <CommentForm user={user} experience={experience} setExperience={setExperience}/>
        </div>
    );
}

export default ExperienceShow;