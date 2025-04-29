import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 dark:text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About Me
          </h2>
          
          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <p>
              I'm a Computer Science and Engineering student at Lovely Professional University. My passion lies in creating innovative web applications and solving complex problems through code.
            </p>
            
            <p>
              Currently pursuing my degree (2022-2026), I've developed a strong foundation in various programming languages and modern web technologies. I specialize in the MERN stack and have successfully built several full-stack applications that demonstrate my technical capabilities.
            </p>
            
            <p>
              My technical expertise includes proficiency in languages like Java, Python, C++, and JavaScript, along with frameworks and technologies such as React.js, Node.js, MongoDB, and Express.js. I'm particularly interested in creating responsive and user-friendly web applications that solve real-world problems.
            </p>
            
            <p>
              Beyond coding, I'm committed to continuous learning and staying updated with the latest technologies. I've completed several certifications in areas ranging from Data Structures and Algorithms to Generative AI, showcasing my dedication to expanding my knowledge base.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;