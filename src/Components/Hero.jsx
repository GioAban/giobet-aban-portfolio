import React from "react";
import "../assets/css/hero.css";
import GioImage from "../assets/images/gio-aban.png";
const Hero = () => {
	return (
		<section id="hero">
			<div className="row">
				<div id="hero-info" className="col">
					<p id="hello-sentence">Hello there!</p>
					<h1>I'm Giobet Aban</h1>
					<p id="hero-paragraph">
						Full-stack web and mobile developer using JavaScript, PHP and Java.
						I build responsive apps with Laravel, Bootstrap & more — and mentor
						students as an IT instructor.
					</p>
					<div id="hero-button">
						<button className="btn btn-primary">Projects</button>
						<button className="btn btn-outline-primary">Contact Me</button>
					</div>
				</div>
				<div id="hero-photo" className="col col-sm-12">
					<img src={GioImage} alt="Gio Aban photo" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
