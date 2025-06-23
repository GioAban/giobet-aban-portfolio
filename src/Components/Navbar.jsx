import React, { useState, useEffect } from "react";
import "../assets/css/navbar.css";
import { ImSun } from "react-icons/im";
import { FaRegMoon } from "react-icons/fa";
import { TbCircleLetterG } from "react-icons/tb";

const Navbar = () => {
	const [isLight, setLight] = useState(() => {
		const saved = localStorage.getItem("theme");
		if (saved === null) {
			localStorage.setItem("theme", "dark");
			return false;
		}
		return saved === "light";
	});

	useEffect(() => {
		document.body.classList.toggle("dark-mode", !isLight);
	}, [isLight]);

	const handleTheme = () => {
		const newTheme = !isLight;
		setLight(newTheme);
		localStorage.setItem("theme", newTheme ? "light" : "dark");
		document.body.classList.toggle("dark-mode", !newTheme);
	};

	return (
		<nav id="navbar">
			<div className="row text-center">
				<div className="col-2">
					<p className="mt-3"><TbCircleLetterG id="ic-nav" /></p>
				</div>
				<div className="col">
					<ul className="navbarItem">
						<li><a href="#hero">Home</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#project">Projects</a></li>
						<li><a href="#skills">Skills</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</div>
				<div className="col-2">
					<div id="navbar-theme-btn">
						{isLight ? (
							<FaRegMoon id="faRegMoon" onClick={handleTheme} />
						) : (
							<ImSun id="imSun" onClick={handleTheme} />
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
