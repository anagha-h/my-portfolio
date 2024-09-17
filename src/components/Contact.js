import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Importing icons

function Contacts() {
  return (
    <section id="contact" className="py-12 bg-teal-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Contact Me</h2>
        
        <div className="flex justify-center space-x-8 mb-8">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/anaghahonnali"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-110 hover:text-teal-400 hover:animate-bounce"
          >
            <FaLinkedin size={40} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/anagha-h"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-110 hover:text-teal-400 hover:animate-bounce"
          >
            <FaGithub size={40} />
          </a>

          {/* Email */}
          <a
            href="mailto:anagha.gh@gmail.com"
            className="transform transition-transform duration-300 hover:scale-110 hover:text-teal-400 hover:animate-bounce"
          >
            <FaEnvelope size={40} />
          </a>
        </div>

        <p className="text-lg">
          Feel free to reach out to me through any of the platforms above. I'm always open to discussing new opportunities and collaborations.
        </p>
      </div>
    </section>
  );
}

export default Contacts;


