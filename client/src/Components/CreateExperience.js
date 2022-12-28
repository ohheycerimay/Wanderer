import React, {useState} from 'react';
import ExperiencesCard from './ExperiencesCard';

function CreateExperience({experiencesData, setExperiencesData}) {
    let initialFormState = {
        name: "",
        location:"",
        description: "",
        price: "",
        image_url: "",
        likes: "",
    }
    const [formData, setFormData] = useState(initialFormState);
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/experiences", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }).then(response => response.json())
            .then(data => {
                setFormData(initialFormState)
                setExperiencesData([data, ...experiencesData])
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

 

    return (
        <div>
             <h3>Create An Experience</h3>
            <form id="form" onSubmit={handleSubmit}>
                <input className="input_field" value={formData.name} placeholder="name" name="name" type="text" onChange={handleChange} />
                <input className="input_field" value={formData.location} placeholder="location" name="location" type="text" onChange={handleChange} />
                <input className="input_field" value={formData.description} placeholder="description" name="description" type="text" onChange={handleChange} />
                <input className="input_field" value={formData.price} placeholder="price" name="price" type="number" onChange={handleChange} />
                <input className="input_field" value={formData.image_url} placeholder="image-url" name="image_url" type="text" onChange={handleChange} />
                <button className="button-85" id="create-experience-button">Create Experience</button>
 
            </form>
            {experiencesData.map(experience => <ExperiencesCard key={experience.id} experience={experience} />)}
            
        </div>
    );
}

export default CreateExperience;