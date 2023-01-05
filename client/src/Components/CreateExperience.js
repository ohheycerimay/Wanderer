import React, {useState} from 'react';


function CreateExperience({experiences, setExperiences}) {
    // console.log(prop)

    const [showForm, setShowForm] = useState(false)
    // console.log(experienceData);
    
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
                setExperiences([data, ...experiences])
                setShowForm(!showForm)
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
            <div>
            <button className="create-button" id="create-experience-button" onClick={() => setShowForm(!showForm)}>Login or Sign up to Create an Experience</button>
            </div>
        {showForm ? 
        (<div>
            <form id="form" onSubmit={handleSubmit}>
                <input className="input_field" value={formData.name} placeholder="name" name="name" type="text" onChange={handleChange} />
                <input className="input_field" value={formData.location} placeholder="location" name="location" type="text" onChange={handleChange} />
                <input className="input_field" value={formData.description} placeholder="description" name="description" type="text" onChange={handleChange} />
                <input className="input_field" value={formData.price} placeholder="price" name="price" type="number" onChange={handleChange} />
                <input className="input_field" value={formData.image_url} placeholder="image-url" name="image_url" type="text" onChange={handleChange} />
                <button className="create-button" id="create-experience-button">Create Experience</button>

            </form>
        </div>) : <></>}
            
            
        </div>
    );
}

export default CreateExperience;
