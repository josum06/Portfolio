import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-10 sm:my-16 lg:my-20 text-center text-2xl sm:text-3xl lg:text-4xl px-4'>
        About <span className='text-neutral-500'>Me</span>
      </h1>
      
      <div className='flex flex-col lg:flex-row lg:flex-wrap'>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2 px-4 lg:px-8 mb-8 lg:mb-0'
        >
          <div className='flex items-center justify-center h-full'>
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 rounded-2xl blur opacity-75'></div>
              <div className='relative bg-neutral-900 rounded-2xl p-4 sm:p-6 lg:p-8 border border-neutral-800 w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto'>
                <div className='text-center'>
                  <div className='w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center'>
                    <span className='text-xl sm:text-2xl font-bold text-white'>{"</>"}</span>
                  </div>
                  <h3 className='text-base sm:text-lg font-semibold text-white mb-2'>Full Stack Developer</h3>
                  <p className='text-neutral-400 text-xs sm:text-sm mb-4 sm:mb-6'>Building digital experiences</p>
                  
                  <div className='flex justify-between items-center px-2 sm:px-4 space-x-4'>
                    <div className='text-center flex-1'>
                      <div className='text-lg sm:text-xl font-bold text-purple-400 mb-1'>1+</div>
                      <div className='text-xs text-neutral-500'>Years</div>
                    </div>
                    <div className='text-center flex-1'>
                      <div className='text-lg sm:text-xl font-bold text-pink-400 mb-1'>6+</div>
                      <div className='text-xs text-neutral-500'>Projects</div>
                    </div>
                    <div className='text-center flex-1'>
                      <div className='text-lg sm:text-xl font-bold text-indigo-400 mb-1'>10+</div>
                      <div className='text-xs text-neutral-500'>Technologies</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2 px-4 lg:px-8'
        >
          <div className='flex items-center justify-center lg:justify-start h-full'>
            <div className='max-w-none lg:max-w-xl'>
              <p className='mb-4 sm:mb-6 text-neutral-400 leading-relaxed text-sm sm:text-base'>
                I am a dedicated and versatile full-stack developer with a strong passion for
                creating efficient and user-centric web applications. I have hands-on experience
                with technologies such as React.js, Next.js, Node.js, MongoDB, MySQL, and Supabase,
                gained through real-world projects.
              </p>
              
              <p className='mb-4 sm:mb-6 text-neutral-400 leading-relaxed text-sm sm:text-base'>
                I actively practice Data Structures and Algorithms which has significantly
                strengthened my problem-solving skills. I thrive in collaborative environments,
                enjoy tackling complex technical challenges, and continuously seek opportunities
                to learn and grow.
              </p>
              
              <p className='text-neutral-400 leading-relaxed text-sm sm:text-base'>
                Outside of coding, I enjoy exploring new technologies, staying active, and
                contributing to open-source projects.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About