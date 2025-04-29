import React from "react";
import { ArrowDown, Download } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-10 min-h-screen flex flex-col justify-center relative overflow-hidden dark:text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-50 to-brand-100 dark:from-neutral-900 dark:to-neutral-800"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-brand-400 dark:bg-brand-600 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent-400 dark:bg-accent-600 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
          <div className="md:w-1/3">
            <div className="w-48 h-48 md:w-56 md:h-56 mx-auto md:mx-0 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-neutral-800">
              <img
                src={"https://i.ibb.co/wFx9W2qG/img.jpg"}
                alt="Mohd Haani"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 animate-fade-in">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500 dark:from-brand-400 dark:to-accent-400">
                Mohd Haani
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-neutral-700 dark:text-neutral-300 mb-4 animate-fade-in animation-delay-200">
              Computer Science Student & Full Stack Developer
            </h2>
            <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 mb-6 animate-fade-in animation-delay-400 max-w-2xl">
              I'm a passionate Computer Science student at Lovely Professional
              University, specializing in MERN stack development and building
              innovative web applications. Currently focused on creating
              efficient and user-friendly digital solutions.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 animate-fade-in animation-delay-600">
              <a
                href="#contact"
                className="px-6 py-3 bg-brand-600 text-white hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-600 font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-white dark:bg-neutral-800 text-brand-600 dark:text-brand-400 font-medium rounded-lg border border-brand-600 dark:border-brand-400 hover:bg-brand-50 dark:hover:bg-neutral-700 transition-colors duration-300"
              >
                View My Work
              </a>
              <div className="flex gap-4">
                <a
                  href=""
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-800 text-brand-600 dark:text-brand-400 font-medium rounded-lg border border-brand-600 dark:border-brand-400 hover:bg-brand-50 dark:hover:bg-neutral-700 transition-colors duration-300"
                >
                  <Download className="h-4 w-4" />
                  <span>Video CV</span>
                </a>
                <a
                  href="https://docs.google.com/document/d/1bgpQZ03WD5Vcx7LmHtooHbUtST9_g1HY/edit?usp=sharing&ouid=118256421608042709413&rtpof=true&sd=true"
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-800 text-brand-600 dark:text-brand-400 font-medium rounded-lg border border-brand-600 dark:border-brand-400 hover:bg-brand-50 dark:hover:bg-neutral-700 transition-colors duration-300"
                >
                  <Download className="h-4 w-4" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-neutral-800 shadow-md text-brand-600 dark:text-brand-400"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
