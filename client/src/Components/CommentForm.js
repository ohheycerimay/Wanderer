import React, {useState} from 'react';
// import ExperiencesCard from './ExperiencesCard';
import {useParams} from "react-router-dom";



function CommentForm() {

    const [destination, setDestination] = useState({posts:[]})  
    let initialFormState = {
        comment: "",
    }

    const [formData, setFormData] = useState(initialFormState);
    const {id} = useParams();
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`/experiences/${id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }).then(response => response.json())
            .then(data => {
                setFormData(initialFormState)
                setDestination({...destination, posts:[...destination.posts, data]})
        
            })

    }
    let handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setFormData({
            ...formData,
            [name]:value
        })
    }

console.log(formData)

    return (
        <div>
            <form id="form" onSubmit={handleSubmit}>
                <input className="input_field" value={formData.comment} placeholder="comment" name="comment" type="text" onChange={handleChange} />
                <button className="button-85" id="create-experience-button">add comment</button>

            </form>

            
        </div>
    );
}

export default CommentForm;