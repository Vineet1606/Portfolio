import React from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
  Code2,
} from "lucide-react";

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/1XLOX4o3wszAUAitXdLvq0PUIYufTi6_Z/view?usp=drive_link"; // Replace with actual resume URL
    link.download = "Vineet_Kumar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className=" min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-200/40 to-indigo-300/40 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-pink-300/40 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-emerald-200/30 to-teal-300/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [-20, 20, -20], y: [-10, 10, -10] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mt-8 max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-gray-700 font-medium">Hello, I'm</span>
            </motion.div>
            <motion.h2
              className="text-5xl md:text-7xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Vineet Kumar
            </motion.h2>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Frontend{" "}
            <motion.span
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
                Developer
              </span>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 rounded-lg blur-lg"
                animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Crafting beautiful, responsive web experiences with modern
            technologies.
            <br className="hidden md:block" />
            Passionate about clean code and innovative user interfaces.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </motion.button>

            <motion.button
              onClick={handleDownloadResume}
              className="bg-white text-gray-800 px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 shadow-lg border-2 border-gray-200 hover:border-gray-300 flex items-center space-x-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="h-5 w-5" />
              <span>Download Resume</span>
            </motion.button>

            {/* <motion.a
              href="#contact"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get In Touch
            </motion.a> */}
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center space-x-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {[
              {
                icon: Github,
                href: "https://github.com/Vineet1606",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/vineet-kumar1606",
                label: "LinkedIn",
              },
              // {
              //   icon: Mail,
              //   href: "mailto:vineet.kumar16003@gmail.com",
              //   label: "Email",
              //   onClick: (e) => {
              //     e.preventDefault();
              //     document
              //       .getElementById("contact")
              //       ?.scrollIntoView({ behavior: "smooth" });
              //   },
              // },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="group relative text-gray-600 hover:text-blue-600 transition-colors duration-300 p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl border border-white/20"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                onClick={social.onClick}
                target={social.href.startsWith("http") ? "_blank" : undefined} // open external links in new tab
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <social.icon className="h-6 w-6" />
                <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/4 left-1/15 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20"
              animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code2 className="h-8 w-8 text-blue-600" />
            </motion.div>
            <motion.div
              className="absolute top-1/3 right-1/15 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-white/20"
              animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-purple-600 font-mono text-sm">
                &lt;/&gt;
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-3 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-white/20">
          <ChevronDown className="h-6 w-6 text-gray-600" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
