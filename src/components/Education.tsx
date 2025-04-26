import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Education
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              Lovely Professional University
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Computer Science and Engineering
            </p>
            <p className="text-gray-500 dark:text-gray-500">
              2022 - 2026 | CGPA: 7.8
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              Lord Mahavira Jain Public School
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              12th with Science
            </p>
            <p className="text-gray-500 dark:text-gray-500">
              2021 - 2022 | Percentage: 85%
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              Lord Mahavira Jain Public School
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              10th
            </p>
            <p className="text-gray-500 dark:text-gray-500">
              2020 | Percentage: 86%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;