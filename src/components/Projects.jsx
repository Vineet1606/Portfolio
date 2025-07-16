import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, TrendingUp, Globe, ShoppingCart } from 'lucide-react';

const Projects = () => {
 const projects = [
  {
    title: "Expense Tracker",
    description: "An intuitive expense tracking app built with Next.js, SQL, Clerk authentication, and Tailwind CSS for seamless budgeting and expense management.",
    tech: ["Next.js", "SQL", "Tailwind CSS", "Clerk"],
    icon: "TrendingUp",
    image: "https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=600", // finance/budgeting related
    liveUrl: "expense-tracker-steel-psi.vercel.app",
    githubUrl: "https://github.com/Vineet1606/Expense_tracker"
  },
  {
    title: "MediBooking",
  description: "A medical appointment booking application developed using React and Tailwind CSS to streamline healthcare scheduling.",
  tech: ["React", "Tailwind CSS"],
  icon: "HeartPulse",
 "image": "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600", // hospital corridor image
  liveUrl: "https://medi-booking-one.vercel.app/",
  githubUrl: "https://github.com/Vineet1606/MediBooking"
  },
  {
    title: "Cuisine Quest",
    description: "A dynamic recipe and cuisine discovery platform crafted with React.js and CSS, featuring rich content and interactive UI.",
    tech: ["React.js", "CSS","RestAPI"],
    icon: "Coffee",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
    liveUrl: "https://cuisine-quest-five.vercel.app/",
    githubUrl: "https://github.com/Vineet1606/CuisineQuest"
  }
];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl hover:border-blue-300 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="flex items-center text-gray-600 hover:text-gray-700 font-medium transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
