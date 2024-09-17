import React from 'react';

function Projects() {
  return (
    <section id="projects" className="py-10 bg-teal-50 text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-8">Projects</h2>
      <div className="flex overflow-x-scroll space-x-4 p-4">
        <a href="project1-link" className="min-w-[300px] bg-white shadow-lg rounded-lg p-6 hover:bg-teal-100 transition">
          <h3 className="text-xl font-semibold mb-2">Chat with PDFs</h3>
          <p className="text-gray-600">Engineered a PDF chatbot using Streamlit and Google Generative AI, enabling 70% faster document queries.</p>
        </a>
        <a href="project2-link" className="min-w-[300px] bg-white shadow-lg rounded-lg p-6 hover:bg-teal-100 transition">
          <h3 className="text-xl font-semibold mb-2">Automated Essay Scoring System</h3>
          <p className="text-gray-600">Developed a Neural Network with LSTM layers to automate essay scoring with an RMSE score of 1.79.</p>
        </a>
        <a href="project3-link" className="min-w-[300px] bg-white shadow-lg rounded-lg p-6 hover:bg-teal-100 transition">
          <h3 className="text-xl font-semibold mb-2">Resume Parser & Role Recommender</h3>
          <p className="text-gray-600">Crafted an ML model for parsing resumes and recommending job roles, achieving an accuracy of 98%.</p>
        </a>
        <a href="project4-link" className="min-w-[300px] bg-white shadow-lg rounded-lg p-6 hover:bg-teal-100 transition">
          <h3 className="text-xl font-semibold mb-2">Credit Card Fraud Detection Model</h3>
          <p className="text-gray-600">Programmed a fraud detection model with 99.98% accuracy, enhancing performance using the SMOTE technique.</p>
        </a>
      </div>
    </section>
  );
}

export default Projects;