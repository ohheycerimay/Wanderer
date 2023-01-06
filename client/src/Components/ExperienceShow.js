
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

        <div className='show-page'>
            {experience && <div>
            <div className='image-container'>
                <img className='show-image' src={experience.image_url} alt='{experience.name}' />
            
            <div className='content-container'>
                
                <h1>{experience.name}</h1>
                
                <h3>{experience.location}</h3>
                <br></br>
                <div stats-container>
                    <h4>${experience.price}</h4>
                    <br></br>
                    <h4>{experience.likes} likes</h4>
                </div>
                
                <br></br>
                <h5>{experience.description}</h5>
                <br></br>
                <a className='stat-button' href={experience.link} target="_blank">Click Here to Book</a>
            </div>
            </div>
            </div>}
            <div className='comment-section'>
                {experience && experience.posts.map(post => <div className="comment"><p>{post.comment}</p><p>{post.likes} likes</p>
                  <button className='stat-button' onClick={()=>updateCommentLikes(post)}>LIKE</button> <button className='stat-button' onClick={()=>handleDelete(post.id)}>DELETE</button> 
                </div>)}
            </div>
            <div className='comment-form-div'>
            <CommentForm user={user} experience={experience} setExperience={setExperience}/>
            </div>
        </div>
    );

}

export default ExperienceShow;