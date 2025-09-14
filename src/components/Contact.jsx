import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen bg-[#0F0026] text-white px-6 py-12"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Let’s Have a Meeting
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-6xl mt-4">
        {/* Contact Form */}
        <motion.form
          className="w-full bg-[#080017] p-6 rounded-2xl shadow-lg space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-transparent border border-gray-500 focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-transparent border border-gray-500 focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              placeholder="Write your message…"
              rows="4"
              className="w-full p-3 rounded-lg bg-transparent border border-gray-500 focus:border-amber-500 focus:outline-none"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-[#0c0c0c] text-lg font-bold text-amber-500 hover:text-amber-100 border border-amber-500 hover:border-amber-400 rounded-xl px-6 py-3 transition-all duration-300 hover:shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message →
          </motion.button>
        </motion.form>

        {/* Socials + Vector */}
        <motion.div
          className="flex flex-col justify-center items-center text-center space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img
            src="/contact.png"
            alt="Contact Illustration"
            className="w-[70%] max-w-md mx-auto"
          />

          {/* Social Links */}
          <div className="flex space-x-6 mt-6">
            <motion.a
              href="mailto:your@email.com"
              className="text-amber-500 hover:text-amber-100 text-2xl transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </motion.a>
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-100 text-2xl transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-100 text-2xl transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-100 text-2xl transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
