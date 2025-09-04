import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import profileHero from "../assets/1.png";

const Hero = () => {
  return (
    <div className="h-screen w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-10 lg:p-24 relative overflow-hidden">
      <Spline
        scene="https://prod.spline.design/FXIysuX2xA4CrIUF/scene.splinecode"
        className="absolute right-0 w-full h-full"
      />
      {/* left Section */}
      <div className="z-40 mt-20 lg:mb-0 mb-[15%]">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 0.5,
            duration: 1,
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6 text-center lg:text-left"
        >
          𝑀𝓊𝒽𝒶𝓂𝓂𝒶𝒹 <br /> 𝒜𝒽𝓂𝑒𝒹
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 0.8,
            duration: 1,
          }}
          className="text-xl lg:text-2xl text-purple-200 max-w-2xl text-center lg:text-left"
        >
          A Software, Web Developer, Data Scientist and Tutor from Pakistan
        </motion.p>
      </div>

      {/* right Section */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 25,
          delay: 0.5,
          duration: 1,
        }}
        className="z-40 lg:w-[40%] lg:mt-10 rounded-full border-2xl border-amber-500 overflow-hidden "
      >
        <img
          src={profileHero}
          alt="heroProfile"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
