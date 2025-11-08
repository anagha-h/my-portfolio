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
          <h3 className="text-xl font-semibold text-blue-800">Arizona State University - Tempe, AZ</h3>
          <p className="text-lg text-gray-700">Master of Science in Computer Science</p>
          <p className="text-gray-600">Expected May 2026</p>
          <p className="mt-2 text-gray-700">GPA: 3.83 / 4.0</p>
          <p className="mt-2 text-gray-600">Coursework: Foundations of Algorithms, Cloud Computing, Data Processing at Scale, Statistical Machine Learning, Planning &amp; Learning in AI, Data Mining, Data Visualization, Applied Cryptography</p>
        </div>

        <div className="bg-teal-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-800">JSS Science and Technology University - Mysuru, India</h3>
          <p className="text-lg text-gray-700">Bachelor of Engineering in Computer Science and Engineering</p>
          <p className="text-gray-600">June 2024</p>
          <p className="mt-2 text-gray-700">GPA: 9.59 / 10</p>
          <p className="mt-2 text-gray-600">Coursework: AI/ML, Databases, Web Development, Software Engineering, Big Data</p>
        </div>
      </div>
    </section>
  );
}

export default Education;