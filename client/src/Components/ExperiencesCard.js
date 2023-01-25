import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const headers = {
	Accepts: 'application/json',
	'Content-Type': 'application/json',
};

function ExperiencesCard({ experience, onDelete }) {
	const [experienceData, setExperienceData] = useState(experience);

	function updateLikes() {
		fetch(`experiences/${experience.id}`, {
			method: 'PATCH',
			headers,
			body: JSON.stringify({ likes: ++experience.likes }),
		})
			.then((r) => r.json())
			.then((data) => {
				setExperienceData({ ...data });
			});
	}

	// function handleDelete(id){
	//     onDelete(id)
	//     fetch(`experiences/${id}`,{
	//         method: 'DELETE',
	//         headers,
	//     })
	// }

	return (
		<>
			<div className='flip-card-container'>
				<div className='flip-card'>
					<div className='card-front'>
						<figure>
							<div className='img-bg'></div>
							<img src={experience.image_url} alt={experience.name} />
							<figcaption>{experience.name}</figcaption>
						</figure>

						<ul>
							<li>{experience.location}</li>
							<li>${experience.price}</li>
							<li>{experience.likes} Likes</li>
							{/* <li>Detail 4</li>
        <li>Detail 5</li> */}
						</ul>
					</div>

					<div className='card-back'>
						<figure>
							<div className='img-bg'></div>
							<img src={experience.image_url} alt={experience.name} />
						</figure>

						<Link to={`/experiences/${experience.id}`}>
							<button className='fancy-button'>More Info</button>
						</Link>
						<button
							className='fancy-button'
							onClick={() => updateLikes(experienceData)}
						>
							Like
						</button>
						{/* <button onClick={()=>handleDelete(experienceData.id)}>Delete</button> */}

						<div className='design-container'>
							<span className='design design--1'></span>
							<span className='design design--2'></span>
							<span className='design design--3'></span>
							<span className='design design--4'></span>
							<span className='design design--5'></span>
							<span className='design design--6'></span>
							<span className='design design--7'></span>
							<span className='design design--8'></span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ExperiencesCard;
