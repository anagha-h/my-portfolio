import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaRobot, FaShieldAlt, FaCloud, FaServer } from 'react-icons/fa';
import { DiJava } from 'react-icons/di';
import { SiMysql, SiPostgresql, SiTensorflow, SiPandas, SiGo, SiTypescript, SiDocker, SiKubernetes, SiAmazonwebservices, SiMicrosoftazure } from 'react-icons/si';
import { AiOutlineBarChart } from 'react-icons/ai';

function Skills() {
  return (
    <section id="skills" className="py-10 bg-teal-100">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Skills</h2>

      {/* Category overview cards */}
      <div className="container mx-auto px-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="flex items-center gap-3">
              <FaRobot className="text-2xl text-teal-400" />
              <h3 className="font-semibold text-lg text-blue-800">Agent & LLM</h3>
            </div>
            <p className="text-sm text-gray-600 mt-2">LangGraph, prompt design, retrieval/grounding (RAG), text-to-SQL, instrumentation &amp; evals, safety/guardrails basics</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="flex items-center gap-3">
              <FaServer className="text-2xl text-indigo-500" />
              <h3 className="font-semibold text-lg text-blue-800">Data & Backend</h3>
            </div>
            <p className="text-sm text-gray-600 mt-2">Python, Go, TypeScript, SQL; REST APIs; streaming &amp; batch ETL; telemetry &amp; logging</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="flex items-center gap-3">
              <FaCloud className="text-2xl text-blue-400" />
              <h3 className="font-semibold text-lg text-blue-800">Cloud & Platform</h3>
            </div>
            <p className="text-sm text-gray-600 mt-2">AWS, Azure, GCP; Snowflake, Databricks; Airflow; Docker, Kubernetes; CI/CD with Jenkins &amp; GitHub Actions</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="flex items-center gap-3">
              <FaShieldAlt className="text-2xl text-yellow-500" />
              <h3 className="font-semibold text-lg text-blue-800">Front-End</h3>
            </div>
            <p className="text-sm text-gray-600 mt-2">React, Node; building customer-facing tools &amp; dashboards</p>
          </div>
        </div>
      </div>

      {/* Icon-based skills: only technologies with clear icons are shown */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-center">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
            <FaReact className="text-5xl text-blue-400" />
            <p className="mt-2 text-sm text-black">React</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
            <FaNodeJs className="text-5xl text-green-500" />
            <p className="mt-2 text-sm text-black">Node.js</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
            <FaPython className="text-5xl text-yellow-600" />
            <p className="mt-2 text-sm text-black">Python</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
            <SiGo className="text-5xl text-teal-500" />
            <p className="mt-2 text-sm text-black">Go</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
            <SiTypescript className="text-5xl text-blue-600" />
            <p className="mt-2 text-sm text-black">TypeScript</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
            <FaDatabase className="text-5xl text-indigo-600" />
            <p className="mt-2 text-sm text-black">SQL</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
            <SiPostgresql className="text-5xl text-blue-700" />
            <p className="mt-2 text-sm text-black">PostgreSQL</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
            <SiMysql className="text-5xl text-blue-800" />
            <p className="mt-2 text-sm text-black">MySQL</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
            <SiDocker className="text-5xl text-blue-500" />
            <p className="mt-2 text-sm text-black">Docker</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
            <SiKubernetes className="text-5xl text-blue-600" />
            <p className="mt-2 text-sm text-black">Kubernetes</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
            <SiAmazonwebservices className="text-5xl text-orange-500" />
            <p className="mt-2 text-sm text-black">AWS</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
            <SiMicrosoftazure className="text-5xl text-blue-500" />
            <p className="mt-2 text-sm text-black">Azure</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;