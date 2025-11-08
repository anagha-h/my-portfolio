import React from 'react';

function Projects() {
  return (
    <section id="projects" className="py-10 bg-teal-50">
      <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Projects</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="https://github.com/anagha-h/llm-eval-toolkit" className="block h-full">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-teal-100 transition h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600">LLM Evaluation Toolkit</h3>
                <p className="text-gray-500 text-sm mb-2">Python, Hugging Face, PyTorch, Pandas, Matplotlib | Jul 2025 – Aug 2025</p>
              </div>
              <ul className="text-gray-600 text-sm list-disc list-inside">
                <li>Developed modular evaluation framework benchmarking BERT, RoBERTa, DistilBERT on SQuAD tasks, producing BLEU, F1, EM, and ROUGE-L metrics.</li>
                <li>Automated logging, reproducible experiment pipelines, and visualization dashboards for rapid prototyping.</li>
              </ul>
            </div>
          </a>

          <a href="https://github.com/anagha-h/confidential-vm-simulator" className="block h-full">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-teal-100 transition h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600">Confidential VM Simulator</h3>
                <p className="text-gray-500 text-sm mb-2">C++, Python, AWS | May 2025</p>
              </div>
              <ul className="text-gray-600 text-sm list-disc list-inside">
                <li>Developed simulation of confidential computing platform with hardware-based memory encryption.</li>
                <li>Implemented data plane in C++ with encrypted memory regions, control plane in Python for VM lifecycle.</li>
              </ul>
            </div>
          </a>

          <a href="https://github.com/anagha-h/edge-inference-pipeline" className="block h-full">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-teal-100 transition h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600">Real-Time Edge Inference Pipeline</h3>
                <p className="text-gray-500 text-sm mb-2">AWS Greengrass, Lambda, SQS | Apr 2025 – May 2025</p>
              </div>
              <ul className="text-gray-600 text-sm list-disc list-inside">
                <li>Built edge-to-cloud inference pipeline reducing cloud bandwidth use by 70% with sub-500ms latency.</li>
                <li>Leveraged SQS-driven parallelism and Dockerized deployment, doubling throughput.</li>
              </ul>
            </div>
          </a>

                    <a href="https://github.com/anagha-h/2025-a-space-odyssey" className="block h-full">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-teal-100 transition h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600">2025: A Space Odyssey</h3>
                <p className="text-gray-500 text-sm mb-2">JavaScript, D3.js, HTML/CSS | Jun 2025</p>
              </div>
              <ul className="text-gray-600 text-sm list-disc list-inside">
                <li>Created interactive visualization dashboard exploring space missions, ISS tracking, and lunar/Mars missions.</li>
                <li>Implemented responsive D3.js visualizations with dynamic filtering and smooth transitions.</li>
              </ul>
            </div>
          </a>

          <a href="https://github.com/anagha-h/elastic-face-recognition" className="block h-full">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-teal-100 transition h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600">Elastic Face Recognition System</h3>
                <p className="text-gray-500 text-sm mb-2">AWS EC2, S3, SQS, Deep Learning | Sep 2024 - Oct 2024</p>
              </div>
              <ul className="text-gray-600 text-sm list-disc list-inside">
                <li>Designed scalable system achieving 95% accuracy on 1,000+ images with autoscaling.</li>
                <li>Reduced request latency to less than 400ms for real-time identity verification.</li>
              </ul>
            </div>
          </a>

          <a href="https://github.com/anagha-h/traffic-forecasting" className="block h-full">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-teal-100 transition h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600">Traffic Data Time Series Forecasting</h3>
                <p className="text-gray-500 text-sm mb-2">Python, RNN, LSTM, GRU, Transformer | Sep 2024 - Oct 2024</p>
              </div>
              <ul className="text-gray-600 text-sm list-disc list-inside">
                <li>Developed multiple deep learning models with RNN achieving lowest MSE (0.00209).</li>
                <li>Applied statistical tests providing insights into temporal patterns.</li>
              </ul>
            </div>
          </a>

          <a href="https://github.com/anagha-h/Automated-Essay-Scoring-System" className="block h-full">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-teal-100 transition h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600">Automated Essay Scoring System</h3>
                <p className="text-gray-500 text-sm mb-2">Flask, React.js, TensorFlow | Dec 2023 – May 2024</p>
              </div>
              <ul className="text-gray-600 text-sm list-disc list-inside">
                <li>Built full-stack platform integrating React frontend with Flask backend.</li>
                <li>Trained LSTM-based model achieving RMSE 1.79, improving efficiency by 70%.</li>
              </ul>
            </div>
          </a>

          <a href="https://github.com/anagha-h/resume_parser_role_recommender" className="block h-full">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-teal-100 transition h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-600">Resume Parser & Role Recommender</h3>
                <p className="text-gray-500 text-sm mb-2">NLP, Python, Streamlit | Apr 2023 – May 2023</p>
              </div>
              <ul className="text-gray-600 text-sm list-disc list-inside">
                <li>Designed NLP-based recommender system with 97.2% accuracy in job role predictions.</li>
                <li>Applied decision trees and content-based filtering for resume-role matching.</li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;