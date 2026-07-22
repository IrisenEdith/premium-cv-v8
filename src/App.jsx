import Footer from "./components/Footer";
import "./styles/Footer.css";
import Experience from "./components/Experience";
import "./styles/Experience.css";
import WhyHireMe from "./components/WhyHireMe";
import "./styles/whyhire.css";
import Contact from "./components/Contact";
import "./styles/contact.css";
import Projects from "./components/Projects";
import "./styles/projects.css";
import Education from "./components/Education";
import "./styles/education.css";
import Skills from "./components/Skills";
import "./styles/skills.css";
import About from "./components/About";
import "./styles/about.css";
import Portfolio from "./components/Portfolio";
import "./styles/portfolio.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import "./styles/navbar.css";
import "./styles/hero.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Portfolio />
        <About />
        <Experience />
        <Skills />
        <Education />
        <WhyHireMe />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;