import React from "react";
import { Link } from "react-router-dom";
import PangTouristaDashboard from "../assets/images/projects/pangtourista/pangtourista-dashboard.png";
import InternshipDashboard from "../assets/images/projects/internship/internship-dashboard.png";
import EcommerceDashboard from "../assets/images/projects/ecommerce/ecommerce-dashboard.png";
import { FiGithub } from "react-icons/fi";
import "../assets/css/project.css";

const Projects = () => {
	const projectList = [
		{
			image: PangTouristaDashboard,
			title: "PangTourista",
			description:
				"Tourism Management Information System is a Web and Mobile platform for tourism management, featuring information dissemination, report generation, and an AI assistant for tourist support.",
			tech: ["Html", "Css", "Bootstrap", "PHP", "Java", "MySQL"],
			github: "https://github.com/GioAban/PangTourista"
		},
		{
			image: InternshipDashboard,
			title: "Internship MIS",
			description:
				"A Web and Mobile-based Internship Management Information System designed to track OJT progress, manage student files, generate reports, and facilitate attendance through QR code scanning.",
			tech: ["Html", "Css", "Ajax", "Bootstrap", "Laravel", "MySQL"],
			github: "https://github.com/GioAban/Trackticum"
		},
		{
			image: EcommerceDashboard,
			title: "Ecommerce",
			description:
				"A web-based product ordering and management system with integrated online payment, enabling customers to browse items, place orders, and pay securely through the website.",
			tech: ["Html", "Css", "Ajax", "Codeigniter", "MySQL"],
			github: "https://github.com/GioAban/EcommerceSystem"
		},
	];

	return (
		<section id="project">
			<div className="row text-center">
				<h1 className="heading-title">Projects</h1>
			</div>
			<div className="row">
				{projectList.map((project, index) => (
					<div className="col" key={index}>
						<img src={project.image} alt={project.title} width="100%" />
						<div className="project-inner-card">
							<h2>{project.title}</h2>
							<p>{project.description}</p>
							<div className="project-tech-used">
								{project.tech.map((tech, i) => (
									<span key={i}>{tech}</span>
								))}
							</div>
						</div>
						<a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-view-details btn btn-primary">
							<FiGithub id="github-ic" /> GitHub
						</a>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
