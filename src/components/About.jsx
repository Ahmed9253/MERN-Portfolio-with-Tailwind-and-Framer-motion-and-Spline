import React from "react";
import { motion } from "framer-motion";
import codingImage from "/coding.png";
import dataImage from "/data.png";
import hardwareImage from "/hardware.png";
import teachingImage from "/online.png";

const aboutItems = [
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

function About() {
  return (
    <section>
      <div className="container">
        <motion.div
          className="bg-amber-800/20 backdrop-blur-xl bg-opacity-40 shadow-xl p-10 m-10 rounded-3xl border border-amber-200/30"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // 👈 triggers when 20% is visible
        >
          {/* Headline */}
          <motion.h2
            className="text-4xl font-extrabold text-center mb-6"
            variants={itemVariants}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl leading-relaxed text-center text-gray-800 font-medium drop-shadow-sm"
            variants={itemVariants}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Hey, I am{" "}
            <span className="font-semibold text-amber-900">Muhammad Ahmed</span>{" "}
            — a Software and Web Developer, Data Scientist, and Hardware
            Technician with a passion for teaching what I have learned over the
            years. Get in touch and let’s build or learn together.
          </motion.p>

          {/* Subheadline */}
          <motion.h3
            className="text-3xl font-bold text-center mt-10 mb-6"
            variants={itemVariants}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            What I Offer
          </motion.h3>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 mt-5 p-5">
            {aboutItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-start p-5 gap-5"
                variants={itemVariants}
                custom={index + 3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <img
                  src={item.icon}
                  alt={item.nameService}
                  className="w-28 h-28 object-contain"
                />
                <p className="font-bold text-lg text-center">
                  {item.nameService}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
