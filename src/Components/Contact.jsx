import React from "react";
import "../assets/css/contact.css";
import { CgMail } from "react-icons/cg";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
const Contact = () => {
	return (
		<section id="contact">
			<div id="contact-header">
				<h1>Contact</h1>
				<p>
					Get in Touch! I'm always open to exciting opportunities - whether
					you're looking for a collaborator on a freelance project, offering a
					full-time role, or just want to chat about all things web development.
					Let’s create something great together!
				</p>
			</div>
			<div className="row">
				<a
					href="mailto:gioaban403@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
					className="col"
				>
					<CgMail className="contact-icon" />
					<p className="title">Email</p>
					<p>Gioaban403@gmail.com</p>
				</a>

				<a
					href="https://www.linkedin.com/in/giobet-aban/"
					target="_blank"
					rel="noopener noreferrer"
					className="col"
				>
					<CiLinkedin className="contact-icon" />
					<p className="title">LinkedIn</p>
					<p>giobet-aban</p>
				</a>

				<a
					href="https://github.com/GioAban"
					target="_blank"
					rel="noopener noreferrer"
					className="col"
				>
					<FiGithub className="contact-icon" />
					<p className="title">GitHub</p>
					<p>GioAban</p>
				</a>

				<a
					href="https://www.instagram.com/riskitall"
					target="_blank"
					rel="noopener noreferrer"
					className="col"
				>
					<FaInstagram className="contact-icon" />
					<p className="title">Instagram</p>
					<p>@riskitall</p>
				</a>
			</div>
		</section>
	);
};

export default Contact;
