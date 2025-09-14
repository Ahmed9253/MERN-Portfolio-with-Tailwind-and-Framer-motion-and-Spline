import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern portfolio built with React, Tailwind, and Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image:
      "https://images.unsplash.com/photo-1617042375876-d8779c9b24d4?auto=format&fit=crop&w=1200&q=80",
    github: "#",
  },
  {
    id: 2,
    title: "E-Commerce App",
    description:
      "Full-stack MERN e-commerce platform with cart and payment integration.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437d9?auto=format&fit=crop&w=1200&q=80",
    github: "#",
  },
  {
    id: 3,
    title: "Chat Application",
    description: "Real-time chat app using Socket.io and modern UI design.",
    tech: ["React", "Node.js", "Socket.io"],
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80",
    github: "#",
  },
  {
    id: 4,
    title: "Task Manager",
    description:
      "A productivity app for managing tasks with drag-and-drop support.",
    tech: ["React", "Redux", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1581090700227-4c4f50b4cdb7?auto=format&fit=crop&w=1200&q=80",
    github: "#",
  },
];

export default function Project() {
  return (
    <div
      id="project"
      className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg min-h-screen px-6 py-12"
    >
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center text-white mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <div className="space-y-16 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="flex flex-col md:flex-row items-center overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="relative w-full md:w-1/2 h-64 md:h-full group rounded-xl overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <h3 className="text-2xl font-bold text-amber-500">
                  {project.title}
                </h3>
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 md:w-1/2 text-white space-y-4">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-black/50 border border-amber-500 text-amber-400 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0c0c0c] text-lg font-bold text-amber-500 hover:text-amber-100 border border-amber-500 hover:border-amber-400 rounded-xl px-5 py-2 transition-all duration-300 hover:shadow-lg cursor-pointer mt-3 w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub /> GitHub
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex justify-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <motion.a
          href="#"
          className="bg-[#0c0c0c] text-lg font-bold text-amber-500 hover:text-amber-100 border border-amber-500 hover:border-amber-400 roundemergin
          px-6 py-3 transition-all duration-300 hover:shadow-lg cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View More on GitHub →
        </motion.a>
      </motion.div>
    </div>
  );
}
