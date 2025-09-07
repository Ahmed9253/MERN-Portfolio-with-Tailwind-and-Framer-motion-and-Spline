import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";
import Loading from "./components/Loading";
import Copywrite from "./components/Copywrite";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Project />
      <Contact />
      <>
        <Copywrite />
      </>
    </>
  );
}
