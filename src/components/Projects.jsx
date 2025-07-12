import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className='my-10 sm:my-16 lg:my-20 text-center text-2xl sm:text-3xl lg:text-4xl px-4'>
        Projects
      </motion.h1>
      
      <div className='space-y-8 sm:space-y-12 px-4 sm:px-6 lg:px-8'>
        {PROJECTS.map((project, index) => (
          <div key={index} className='flex flex-col lg:flex-row lg:justify-center items-start gap-6 lg:gap-8'>
            <motion.div 
              whileInView={{opacity:1, x:0}}
              initial={{opacity:0, x:-100}}
              transition={{duration:1}}
              className='w-full lg:w-1/3 xl:w-1/4 flex justify-center lg:justify-start'>
              <div className='w-full max-w-sm lg:max-w-none'>
                <img 
                  src={project.image}
                  alt={project.title}
                  className='w-full h-48 sm:h-52 lg:h-40 xl:h-48 object-contain bg-neutral-800 rounded-lg shadow-lg border border-neutral-700'
                />
              </div>
            </motion.div>
            
            <motion.div 
              whileInView={{opacity:1, x:0}}
              initial={{opacity:0, x:100}}
              transition={{duration:1}}
              className='w-full lg:w-2/3 xl:w-3/4 space-y-3 sm:space-y-4'>
              <div className='flex items-center gap-3 flex-wrap'>
                <h6 className='text-lg sm:text-xl font-semibold text-white'>
                  {project.title}
                </h6>
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-neutral-400 hover:text-white transition-colors duration-200'
                    title="View on GitHub">
                    <svg 
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className='hover:scale-110 transition-transform duration-200'>
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
                {project.live && (
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-neutral-400 hover:text-white transition-colors duration-200'
                    title="View Live Demo">
                    <svg 
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className='hover:scale-110 transition-transform duration-200'>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </a>
                )}
              </div>
              <p className='text-neutral-400 leading-relaxed text-sm sm:text-base'>
                {project.description}
              </p>
              <div className='flex flex-wrap gap-2 pt-2'>
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className='rounded bg-neutral-900 px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-purple-400 border border-neutral-800'>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects