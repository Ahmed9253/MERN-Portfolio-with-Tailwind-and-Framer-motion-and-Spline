import React from "react";
import { motion } from "framer-motion";
import codingImage from "/coding.png";
import dataImage from "/data.png";
import hardwareImage from "/hardware.png";
import teachingImage from "/online.png";

const servicesItems = [
  {
    nameService: "Web and App Development",
    icon: codingImage,
  },
  {
    nameService: "Data Science and Artificial Intelligence",
    icon: dataImage,
  },
  {
    nameService: "Hardware",
    icon: hardwareImage,
  },
  {
    nameService: "Teaching",
    icon: teachingImage,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const serviceItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function About() {
  return (
    <div className="aboutSection flex flex-col items-center justify-center w-full min-h-screen px-2 sm:px-4 lg:px-6">
      <div className="container my-10 mx-auto max-w-7xl">
        <motion.div
          className="bg-transparent p-4 sm:p-6 md:p-8 lg:p-10 m-2 sm:m-4 md:m-6 lg:m-10 rounded-2xl sm:rounded-3xl "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <motion.div variants={containerVariants}>
            {/* Headline */}
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4 sm:mb-5 md:mb-6"
              variants={itemVariants}
            >
              About Me
            </motion.h2>

            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-center text-gray-800 font-medium drop-shadow-sm px-2 sm:px-4 md:px-6"
              variants={itemVariants}
            >
              Hey, I am{" "}
              <span className="font-semibold text-amber-900">
                Muhammad Ahmed
              </span>{" "}
              — a Software and Web Developer, Data Scientist, and Hardware
              Technician with a passion for teaching what I have learned over
              the years. Get in touch and let's build or learn together.
            </motion.p>

            {/* Subheadline */}
            <motion.h3
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-6 sm:mt-8 md:mt-10 mb-4 sm:mb-5 md:mb-6"
              variants={itemVariants}
            >
              What I Offer
            </motion.h3>

            {/* Services Grid */}
            <motion.div
              className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mt-4 sm:mt-5 p-2 sm:p-3 md:p-4 lg:p-5"
              variants={containerVariants}
            >
              {servicesItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-start p-3 sm:p-4 md:p-5 gap-3 sm:gap-4 md:gap-5"
                  variants={serviceItemVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.img
                    src={item.icon}
                    alt={item.nameService}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
                    whileHover={{
                      rotate: 5,
                      transition: { duration: 0.2 },
                    }}
                  />
                  <motion.p className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-center leading-tight px-1 sm:px-2">
                    {item.nameService}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
