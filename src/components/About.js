import React from 'react';
import profileImage from '../assets/images/my-img.jpg'; // Replace with the correct image path

function About() {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={profileImage}
            alt="Anagha Honnali"
            className="rounded-full shadow-lg w-64 h-64 object-cover md:w-80 md:h-80"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-700 mb-4">
            Hi! I'm Anagha Honnali, a passionate computer science student with a focus on AI, machine learning, and web development.
            I'm currently pursuing a Master of Science in Computer Science at Arizona State University.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            I have hands-on experience working on cutting-edge technologies and deriving meaningful insights from data.
          </p>
          <p className="text-lg text-gray-700">
            I’m excited to continue learning, building projects, and contributing to impactful tech solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
