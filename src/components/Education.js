import React from 'react';
import { FaUniversity } from 'react-icons/fa';

function Education() {
  return (
    <section id="education" className="py-10 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-800">Education</h2>
        <FaUniversity className="text-6xl text-teal-400 mx-auto mt-4" />
      </div>
      <div className="container mx-auto px-4">
        <div className="bg-teal-100 p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl font-semibold text-blue-800">Arizona State University</h3>
          <p className="text-lg text-gray-700">Master of Science in Computer Science</p>
          <p className="text-gray-600">Expected May 2026</p>
          <p className="mt-2 text-gray-600">Coursework: Foundations of Algorithms, Statistical Machine Learning, Planning/Learning Methods in AI</p>
        </div>
        <div className="bg-teal-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-800">JSS Science and Technology University</h3>
          <p className="text-lg text-gray-700">Bachelor of Engineering in Computer Science and Engineering</p>
          <p className="text-gray-600">June 2024</p>
          <p className="text-gray-600">Cumulative GPA: 9.59/10</p>
        </div>
      </div>
    </section>
  );
}

export default Education;