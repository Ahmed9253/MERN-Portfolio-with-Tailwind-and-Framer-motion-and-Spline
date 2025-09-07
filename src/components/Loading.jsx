import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0F0026] space-y-6">
      {/* Greeting Line */}
      <motion.h1
        className="text-3xl md:text-5xl font-mono font-bold text-white text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        &lt;Hello! My Name is{" "}
        <span className="text-[#4CC9F0]">Muhammad Ahmed</span> /&gt;
      </motion.h1>

      {/* Work */}
      <motion.h2
        className="text-center text-2xl md:text-4xl font-mono text-gray-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        &lt;I work at <span className="text-[#F72585]">Dev Quantums</span> /&gt;
      </motion.h2>

      {/* Loading Dots */}
      <div className="flex space-x-2 pt-4">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-5 h-5 bg-[#4CC9F0] rounded-full"
            animate={{
              y: ["0%", "-50%", "0%"],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: "loop",
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
