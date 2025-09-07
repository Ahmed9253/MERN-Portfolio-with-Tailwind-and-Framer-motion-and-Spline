import { motion } from "framer-motion";

const TechIcons = [
  // Programming & Web
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Vue",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },

  // AI / ML
  {
    name: "TensorFlow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "PyTorch",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  {
    name: "Keras",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
  },
  {
    name: "Jupyter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
  },
  {
    name: "Kaggle",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kaggle/kaggle-original.svg",
  },

  // Hardware
  {
    name: "Arduino",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
  },
  {
    name: "Raspberry Pi",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
  },

  // DevOps
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Kubernetes",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },

  // Mobile / App
  {
    name: "Android",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  },
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Dart",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  },

  // UI/UX
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
];

const TechStack = () => (
  <div className="py-24 h-full w-full bg-[#0a0f1f]">
    {/* Section Title */}
    <motion.h2
      className="my-20 font-semibold text-center text-3xl sm:text-4xl md:text-5xl"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      Tools and Technology
    </motion.h2>

    {/* Grid of Icons */}
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 px-6">
      {TechIcons.map((tool, index) => (
        <motion.div
          key={tool.name}
          className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-transparent min-h-[120px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
        >
          <motion.img
            src={tool.icon}
            alt={tool.name}
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
            whileHover={{ scale: 1.25 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <p className="text-xs sm:text-sm mt-2 text-gray-700 dark:text-gray-300">
            {tool.name}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default TechStack;
