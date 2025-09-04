import React from "react";
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

function About() {
  return (
    <section>
      <div className="container">
        <div className="bg-amber-800/20 backdrop-blur-xl bg-opacity-40 shadow-xl p-10 m-10 rounded-3xl border border-amber-200/30">
          {/* Headline */}
          <h2 className="text-4xl font-extrabold text-center mb-6">About Me</h2>
          <p className="text-lg md:text-xl leading-relaxed text-center text-gray-800 font-medium drop-shadow-sm">
            Hey, I am{" "}
            <span className="font-semibold text-amber-900">Muhammad Ahmed</span>{" "}
            — a Software and Web Developer, Data Scientist, and Hardware
            Technician with a passion for teaching what I have learned over the
            years. Get in touch and let’s build or learn together.
          </p>

          {/* Subheadline */}
          <h3 className="text-3xl font-bold text-center mt-10 mb-6">
            What I Offer
          </h3>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 mt-5 p-5">
            {aboutItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-start p-5 gap-5"
              >
                <img
                  src={item.icon}
                  alt={item.nameService}
                  className="w-28 h-28 object-contain"
                />
                <p className="font-bold text-lg text-center">
                  {item.nameService}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
