import React, { useEffect, useState } from 'react'

const fetchHeader = {
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json'
	}
}

const ExperienceItem = ({ data }) => {
	return (
		<li className="experienceItem">
			<article>
				<h4>
					<strong>{data.company} </strong>
					<span>{data.location}</span>
				</h4>
				<h5>
					<strong>{data.role} </strong>
					<span>{data.date}</span>
				</h5>
				{data.description.map((desc, index) => <p key={index}>{desc}</p>)}
			</article>
		</li>
	)
}

export default () => {
	const [ experiences, setExperiences ] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://api.myjson.com/bins/1bvtgg', fetchHeader)
			setExperiences(await response.json())
		}
		fetchData()
	}, [])
	return (
		<ul>
			{experiences.map((exp, index) => (
				// Pass a index as key for render pourposes
				<ExperienceItem key={index} data={exp} />
			))}
		</ul>
	)
}
