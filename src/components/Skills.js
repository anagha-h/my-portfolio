import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaJava, FaDatabase } from 'react-icons/fa';
import { DiJava } from 'react-icons/di';
import { SiMysql, SiPostgresql, SiTensorflow, SiPandas } from 'react-icons/si';
import { AiOutlineBarChart } from 'react-icons/ai';

function Skills() {
  return (
    <section id="skills" className="py-10 bg-teal-100 text-center">
      <h2 className="text-3xl font-bold mb-8 text-blue-800">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex flex-col items-center">
          <FaHtml5 className="text-6xl text-red-600" />
          <p className="mt-2 text-lg text-black">HTML5</p>
        </div>
        <div className="flex flex-col items-center">
          <FaCss3Alt className="text-6xl text-blue-500" />
          <p className="mt-2 text-lg text-black">CSS3</p>
        </div>
        <div className="flex flex-col items-center">
          <FaReact className="text-6xl text-blue-400" />
          <p className="mt-2 text-lg text-black">React</p>
        </div>
        <div className="flex flex-col items-center">
          <FaNodeJs className="text-6xl text-green-500" />
          <p className="mt-2 text-lg text-black">Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <FaPython className="text-6xl text-yellow-600" />
          <p className="mt-2 text-lg text-black">Python</p>
        </div>
        <div className="flex flex-col items-center">
          <FaJava className="text-6xl text-red-700" />
          <p className="mt-2 text-lg text-black">Java</p>
        </div>
        <div className="flex flex-col items-center">
          <SiMysql className="text-6xl text-blue-800" />
          <p className="mt-2 text-lg text-black">MySQL</p>
        </div>
        <div className="flex flex-col items-center">
          <SiPostgresql className="text-6xl text-blue-700" />
          <p className="mt-2 text-lg text-black">PostgreSQL</p>
        </div>
        <div className="flex flex-col items-center">
          <SiTensorflow className="text-6xl text-orange-600" />
          <p className="mt-2 text-lg text-black">TensorFlow</p>
        </div>
        <div className="flex flex-col items-center">
          <SiPandas className="text-6xl text-blue-600" />
          <p className="mt-2 text-lg text-black">Pandas</p>
        </div>
        <div className="flex flex-col items-center">
          <AiOutlineBarChart className="text-6xl text-green-500" />
          <p className="mt-2 text-lg text-black">Data Analysis</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;