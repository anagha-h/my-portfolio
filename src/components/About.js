import React from 'react';
import profileImage from '../assets/images/my-img.jpg'; // Replace with the correct image path

export default function About() {
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
            Hi, I’m <strong>Anagha Honnali</strong>, a computer science grad student at Arizona State University passionate about <em>AI, Machine Learning,</em> and <em>software engineering</em>. I love building systems that turn data into intelligent, reliable products.
          </p>

          <p className="text-lg text-gray-700 mb-4">
            I enjoy solving real-world problems, designing clean architectures, and exploring how AI can make everyday tools smarter and more human-centered.
          </p>

          <p className="text-lg text-gray-700">
            I’m currently seeking <strong>full-time SWE</strong> and <strong>AI/ML or data-focused co-op roles</strong> where I can keep learning and build impactful products.
          </p>
        </div>
      </div>
    </section>
  );
}