import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Projects />
			<Skills />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
