import React from 'react';
import { FaHandsHelping } from 'react-icons/fa';

function Volunteering() {
  return (
    <section id="volunteering" className="py-10 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-800">Volunteering</h2>
        <FaHandsHelping className="text-6xl text-teal-400 mx-auto mt-4" />
      </div>
      <div className="container mx-auto px-4">
        <div className="bg-teal-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-800">Google Developer Student Clubs - JSSSTU</h3>
          <p className="text-lg text-gray-700">Chapter Lead</p>
          <p className="text-gray-600">July 2022 - July 2023</p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Managed a team of 30 students. Organized 8 workshops and events on ML and soft skills, impacting over 300 participants.</li>
            <li>Modernized the club’s website, collaborating with 5 web developers, resulting in a 30% increase in site engagement.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Volunteering;