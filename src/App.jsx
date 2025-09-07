import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Project />
      <Contact />
      <>
        <p>&copy; 2025 DevQuantum,All right reserved</p>
      </>
    </>
  );
}
