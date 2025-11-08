import React from 'react';
import { FaBriefcase, FaCode } from 'react-icons/fa';

function Experience() {
  return (
    <section id="experience" className="py-10 bg-teal-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-800">Experience</h2>
        <FaBriefcase className="text-6xl text-teal-400 mx-auto mt-4" />
      </div>
      <div className="container mx-auto px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl font-semibold text-blue-800">CVS Health</h3>
          <p className="text-lg text-gray-700">Data Engineer Intern</p>
          <p className="text-gray-600">May 2025 - Aug 2025</p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Deployed a text-to-SQL agent using LangGraph and Gemini, cutting distributed query load by 50% and boosting analytics scalability for internal users.</li>
            <li>Developed a real-time data freshness pipeline in Airflow and Snowflake, integrating Jenkins alerts to eliminate 90% of manual monitoring and ensure 24/7 reliability.</li>
            <li>Engineered a SQL-based SPI history system tracking over 2M prescriber records, reducing insight turnaround time from hours to minutes for business teams.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl font-semibold text-blue-800">Mercedes-Benz Research and Development India</h3>
          <p className="text-lg text-gray-700">Software Engineer Intern</p>
          <p className="text-gray-600">February 2024 - June 2024</p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Revamped the data pipeline architecture to enable live monitoring of over-the-air updates using Azure services, resulting in a 93.75% increase in data pipeline speed through successfully implementing 3 proofs of concept.</li>
            <li>Architected real-time data flows using Delta Live Tables, Azure Stream Analytics, and Azure Database for PostgreSQL, reducing latency by 65%.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;