import React from "react";
import { useParams } from "react-router-dom";
const ProjectDetails = () => {
	const { id } = useParams();
	return (
		<div className="container mt-5">
			<h2>Project Details</h2>
			<p>Project ID: {id}</p>
		</div>
	);
};
export default ProjectDetails;