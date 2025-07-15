import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Award, Briefcase, GraduationCap } from 'lucide-react';

const Resume = () => {
  const handleDownloadResume = () => {
    // Create a dummy PDF download - in a real app, this would link to your actual resume
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual resume URL
    link.download = 'John_Doe_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resumeHighlights = [
    {
      icon: Briefcase,
      title: "Professional Experience",
      description: "2+ years of frontend development experience with modern frameworks"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Computer Science degree with focus on web technologies"
    },
    {
      icon: Award,
      title: "Certifications",
      description: "React Developer Certification and JavaScript ES6+ Certification"
    }
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Resume
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download my complete resume to learn more about my experience and qualifications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {resumeHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-lg mr-4">
                    <highlight.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">{highlight.title}</h4>
                </div>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-12 shadow-2xl border border-gray-200">
              <motion.div
                className="mb-8"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <FileText className="h-24 w-24 text-blue-600 mx-auto mb-4" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                John Doe - Frontend Developer
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Complete resume including detailed work experience, education, 
                technical skills, and project portfolio. Available in PDF format 
                for easy viewing and printing.
              </p>

              <motion.button
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-3 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="h-6 w-6" />
                <span>Download Resume (PDF)</span>
              </motion.button>

              <p className="text-gray-500 text-sm mt-4">
                Last updated: January 2025
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
