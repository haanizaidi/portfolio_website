import React from 'react';
import * as SimpleIcons from 'simple-icons';

interface Skill {
  name: string;
  level: number;
  category: 'languages' | 'frameworks' | 'tools' | 'other';
  icon?: string;
}

const skills: Skill[] = [
  // Languages
  { name: 'JavaScript', level: 90, category: 'languages', icon: 'siJavascript' },
  { name: 'Java', level: 85, category: 'languages', icon: 'siJava' },
  { name: 'Python', level: 80, category: 'languages', icon: 'siPython' },
  { name: 'C++', level: 85, category: 'languages', icon: 'siCplusplus' },
  { name: 'HTML/CSS', level: 90, category: 'languages', icon: 'siHtml5' },
  
  // Frameworks & Technologies
  { name: 'React.js', level: 88, category: 'frameworks', icon: 'siReact' },
  { name: 'Node.js', level: 85, category: 'frameworks', icon: 'siNodedotjs' },
  { name: 'Express.js', level: 82, category: 'frameworks', icon: 'siExpress' },
  { name: 'MongoDB', level: 80, category: 'frameworks', icon: 'siMongodb' },
  { name: 'Tailwind CSS', level: 85, category: 'frameworks', icon: 'siTailwindcss' },
  
  // Tools
  { name: 'Git & GitHub', level: 85, category: 'tools', icon: 'siGithub' },
  { name: 'REST APIs', level: 85, category: 'tools', icon: 'siPostman' },
  { name: 'Data Structures', level: 80, category: 'tools' },
  { name: 'Algorithms', level: 80, category: 'tools' },
  
  // Other Skills
  { name: 'Problem Solving', level: 85, category: 'other' },
  { name: 'UI/UX Design', level: 80, category: 'other', icon: 'siFigma' },
  { name: 'Responsive Design', level: 85, category: 'other' }
];

const SkillBar: React.FC<{ name: string; level: number; icon?: string }> = ({ name, level, icon }) => {
  const IconComponent = icon ? SimpleIcons[icon as keyof typeof SimpleIcons] : null;
  
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <div className="flex items-center gap-2">
          {IconComponent && (
            <svg
              className="w-4 h-4 text-gray-700 dark:text-gray-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              dangerouslySetInnerHTML={{ __html: IconComponent.svg }}
            />
          )}
          <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        </div>
        <span className="text-gray-500 dark:text-gray-400 text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%`, transform: 'translateX(-100%)', animation: 'slideIn 1s forwards' }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const categories = [
    { id: 'languages', label: 'Programming Languages' },
    { id: 'frameworks', label: 'Frameworks & Technologies' },
    { id: 'tools', label: 'Tools & Concepts' },
    { id: 'other', label: 'Other Skills' }
  ];

  return (
    <section id="skills" className="py-20 dark:text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Skills & Expertise
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {categories.map((category) => (
              <div key={category.id}>
                <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                  {category.label}
                </h3>
                <div>
                  {skills
                    .filter((skill) => skill.category === category.id)
                    .map((skill) => (
                      <SkillBar 
                        key={skill.name} 
                        name={skill.name} 
                        level={skill.level}
                        icon={skill.icon}
                      />
                    ))
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;