import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import profileHero from "../assets/1.png";

const Hero = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-6 sm:py-8 lg:py-24 relative overflow-hidden ">
      <Spline
        scene="https://prod.spline.design/FXIysuX2xA4CrIUF/scene.splinecode"
        className="absolute w-full h-full"
      />

      {/* Note to understand this layout chaing the order of elements on larger vs smaller screens */}
      {/* Mobile Layout: Image First, Text Second */}
      {/* Desktop Layout: Image Second, Text First */}

      <div className="z-40 flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full max-w-7xl gap-6 sm:gap-8 lg:gap-12">
        {/* Image Section - Top on mobile, Right on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          className="order-1 lg:order-2 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full border-4 border-amber-500 overflow-hidden shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 flex-shrink-0"
        >
          <img
            src={profileHero}
            alt="Muhammad Ahmed - Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Section, Bottom on mobile, Left on desktop */}
        <div className="order-2 lg:order-1 flex-1 lg:max-w-2xl text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 0.5,
              duration: 1,
            }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight"
          >
            𝑀𝓊𝒽𝒶𝓂𝓂𝒶𝒹 <br /> 𝒜𝒽𝓂𝑒𝒹
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 0.7,
              duration: 1,
            }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-purple-200 leading-relaxed px-2 sm:px-0"
          >
            A Software, Web Developer, Data Scientist and Tutor from Pakistan
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
