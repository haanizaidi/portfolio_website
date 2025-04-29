import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

interface Training {
  title: string;
  provider: string;
  date: string;
  certificateUrl: string;
}

const trainings: Training[] = [
  {
    title: "Machine Learning and AI",
    provider: "Board Infinity",
    date: "July 2024",
    certificateUrl: "https://drive.google.com/file/d/1DssfFXTIGAZcmHJfrrisjxAIkMnGSc5J/view?usp=sharing"
  }
];

const Training: React.FC = () => {
  return (
    <section id="training" className="py-20 bg-gray-50 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Summer Training
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {trainings.map((training, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 mb-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                  <Award className="h-6 w-6" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {training.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-3">
                    <span className="font-medium">{training.provider}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{training.date}</span>
                    </div>
                  </div>
                  
                  <a
                    href={training.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;