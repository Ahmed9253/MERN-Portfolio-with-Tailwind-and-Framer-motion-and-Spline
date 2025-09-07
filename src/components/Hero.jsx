import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import profileHero from "../assets/1.png";
import { useEffect, useState } from "react";

const Hero = () => {
  const [ready, setReady] = useState(false);

  // Pre-decode image to avoid first-frame glitch
  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.src = profileHero;

    const markReady = () => !cancelled && setReady(true);

    if (img.decode) {
      img.decode().then(markReady).catch(markReady);
    } else {
      img.onload = markReady;
      img.onerror = markReady;
    }

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-6 lg:px-16 xl:px-24 py-8 lg:py-24 relative overflow-hidden isolate">
      {/* Background 3D */}
      <Spline
        scene="https://prod.spline.design/FXIysuX2xA4CrIUF/scene.splinecode"
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Main content */}
      <div className="relative z-40 flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full max-w-7xl gap-8 lg:gap-12">
        {ready ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", duration: 0.5 }}
            className="order-1 lg:order-2 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-2xl border-4 border-amber-500 overflow-hidden shadow-2xl hover:shadow-amber-500/25 transition-shadow duration-300"
            style={{ willChange: "transform", transform: "translateZ(0)" }}
          >
            <img
              src={profileHero}
              alt="Muhammad Ahmed - Profile"
              className="w-full h-full object-cover block"
              loading="eager"
              decoding="async"
              fetchpriority="high"
              draggable={false}
            />
          </motion.div>
        ) : (
          <div className="order-1 lg:order-2 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-2xl border-4 border-amber-500 overflow-hidden shadow-2xl animate-pulse bg-white/5" />
        )}

        <div className="order-2 lg:order-1 flex-1 lg:max-w-2xl text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-4 leading-tight text-violet-300 text-center drop-shadow-lg"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            𝐌𝐮𝐡𝐚𝐦𝐦𝐚𝐝 <br /> 𝐀𝐡𝐦𝐞𝐝 <br /> محمد احمد
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-purple-200 text-center leading-relaxed px-2 sm:px-0"
          >
            A Software, Web Developer, Data Scientist and Tutor from Pakistan
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
