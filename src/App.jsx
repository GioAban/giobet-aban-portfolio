import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ProjectDetails from "./Components/ProjectDetails";
function App() {
	const location = useLocation();
	const isProjectDetailPage = location.pathname.startsWith("/project/");
	return (
		<>
			{!isProjectDetailPage && <Navbar />}
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Hero />
							<About />
							<Projects />
							<Skills />
							<Contact />
							<Footer />
						</>
					}
				/>
				<Route path="/project/:id" element={<ProjectDetails />} />
			</Routes>
		</>
	);
}

export default App;
