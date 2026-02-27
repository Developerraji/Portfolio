import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Education from "./Components/Education"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Certificates from "./Components/Certificates"
import Contact from "./Components/Contact"
import "./App.css";
import Footer from "./Components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;