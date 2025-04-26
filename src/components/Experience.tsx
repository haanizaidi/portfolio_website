import React, { useState } from 'react';
import { BriefcaseIcon, Calendar } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Job[] = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    period: "2020 - Present",
    description: [
      "Lead a team of 5 developers to build and maintain the company's flagship product",
      "Implemented CI/CD pipelines that reduced deployment time by 40%",
      "Redesigned the application architecture, resulting in a 30% performance improvement",
      "Mentored junior developers and conducted code reviews to ensure high-quality code"
    ],
    technologies: ["React", "TypeScript", "Node.js", "AWS", "Docker"]
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Digital Solutions Ltd.",
    period: "2017 - 2020",
    description: [
      "Developed responsive web applications for clients in various industries",
      "Optimized database queries, reducing load times by 25%",
      "Collaborated with designers to implement pixel-perfect UI components",
      "Participated in agile development processes, including daily stand-ups and sprint planning"
    ],
    technologies: ["JavaScript", "Vue.js", "PostgreSQL", "CSS", "Git"]
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "WebSphere Studios",
    period: "2015 - 2017",
    description: [
      "Assisted in the development of e-commerce websites for small businesses",
      "Created and maintained documentation for internal tools",
      "Fixed bugs and added new features to existing applications",
      "Participated in user testing and gathered feedback for improvements"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
  }
];

const Experience: React.FC = () => {
  const [activeJob, setActiveJob] = useState<number>(1);

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Company tabs */}
            <div className="md:w-1/3">
              <div className="flex md:flex-col overflow-x-auto md:overflow-visible scrollbar-hide">
                {experiences.map((job) => (
                  <button
                    key={job.id}
                    onClick={() => setActiveJob(job.id)}
                    className={`px-4 py-3 text-left border-b-2 md:border-l-2 md:border-b-0 transition-colors duration-300 ${
                      activeJob === job.id
                        ? 'border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-800'
                        : 'border-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <span className="whitespace-nowrap">{job.company}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Job details */}
            <div className="md:w-2/3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              {experiences
                .filter((job) => job.id === activeJob)
                .map((job) => (
                  <div key={job.id} className="animate-fade-in">
                    <div className="flex items-center gap-2 mb-1">
                      <BriefcaseIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {job.title}
                      </h3>
                    </div>
                    
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {job.company}
                    </p>
                    
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{job.period}</span>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {job.description.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;