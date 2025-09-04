import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <>
        <p>&copy; 2025 DevQuantum,All right reserved</p>
      </>
    </>
  );
}
