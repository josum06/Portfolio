import React, { useState, useEffect } from 'react'
import { HERO_CONTENT } from '../constants'
import { motion, AnimatePresence } from "framer-motion";

const container = (delay) =>({
  hidden: {x: - 100 , opacity: 0},
  visible: {
    x:0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
})

const skillCards = [
  {
    title: "Frontend Architect",
    tech: "React • Next.js • TypeScript • Tailwind",
    description: "Creating pixel-perfect, performant user experiences with modern frameworks",
    icon: "🎨",
    color: "from-blue-400 to-cyan-400",
    stats: "10+ Components Built"
  },
  {
    title: "Backend Engineer",
    tech: "Node.js • Express • MYSql • REST",
    description: "Architecting scalable APIs and microservices with clean code principles",
    icon: "⚡",
    color: "from-green-400 to-emerald-400",
    stats: "99% Uptime Achieved"
  },
  {
    title: "Database Designer",
    tech: "MongoDB • PostgreSQL • Redis",
    description: "Optimizing data flow and designing efficient database schemas",
    icon: "🗄️",
    color: "from-purple-400 to-pink-400",
    stats: "10M+ Records Managed"
  },
  {
    title: "Cloud Explorer",
    tech: "AWS • Docker • Kubernetes • Terraform",
    description: "Currently mastering cloud infrastructure and DevOps practices",
    icon: "☁️",
    color: "from-orange-400 to-red-400",
    stats: "Learning & Growing"
  },
  {
    title: "Problem Solver",
    tech: "Algorithms • Data Structures • System Design",
    description: "Breaking down complex problems into elegant, efficient solutions",
    icon: "🧠",
    color: "from-indigo-400 to-purple-400",
    stats: "1000+ Problems Solved"
  },
  {
    title: "Innovation Driver",
    tech: "AI/ML • WebRTC • PWA • WebAssembly",
    description: "Exploring cutting-edge technologies to build next-gen applications",
    icon: "🚀",
    color: "from-pink-400 to-rose-400",
    stats: "Always Experimenting"
  }
];

const cardVariants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    }
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

function Hero() {
  const [[page, direction], setPage] = useState([0, 0]);
  
  const imageIndex = ((page % skillCards.length) + skillCards.length) % skillCards.length;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000); // Increased to 5 seconds for better readability
    
    return () => clearInterval(timer);
  }, [page]);

  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
       <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
             <motion.h1
                 variants={container(0)}
                initial="hidden"
                animate="visible"
                className='pb-16 text-6xl font-thin tracking-tight lg:mt-16
             lg:text-8xl'>Sumit Joshi
             </motion.h1>
             <motion.span
                   variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className='bg-gradient-to-r from-pink-300 via-slate-500
              to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Full Stack Developer</motion.span>
             <motion.p
                 variants={container(1)}
                initial="hidden"
                animate="visible"
               className='my-2 max-w-xl py-6 font-light tracking-tighter'>
              {HERO_CONTENT}</motion.p>
          </div>
        </div>
        
        <div className='w-full lg:w-1/2 lg:p-8'>
           <div className='flex justify-center items-center h-full'>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className='relative w-full max-w-md h-96 overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 shadow-2xl border border-neutral-700'>
                
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={page}
                    custom={direction}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);

                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                      }
                    }}
                    className='absolute w-full h-full p-8 cursor-grab active:cursor-grabbing'>
                    
                    <div className='h-full flex flex-col justify-between'>
                      <div className='text-center'>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3 }}
                          className='text-6xl mb-4'>
                          {skillCards[imageIndex].icon}
                        </motion.div>
                        
                        <motion.h3
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          className='text-2xl font-bold text-white mb-2'>
                          {skillCards[imageIndex].title}
                        </motion.h3>
                        
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className={`text-sm font-semibold bg-gradient-to-r ${skillCards[imageIndex].color} bg-clip-text text-transparent mb-4`}>
                          {skillCards[imageIndex].tech}
                        </motion.div>
                        
                        <motion.p
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.6 }}
                          className='text-neutral-300 leading-relaxed mb-4'>
                          {skillCards[imageIndex].description}
                        </motion.p>
                        
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.7 }}
                          className='inline-block px-3 py-1 rounded-full bg-neutral-700 text-neutral-300 text-xs font-medium'>
                          {skillCards[imageIndex].stats}
                        </motion.div>
                      </div>
                      
                      <div className='flex justify-center space-x-2 mt-6'>
                        {skillCards.map((_, index) => (
                          <motion.div
                            key={index}
                            initial={{ scale: 0.8, opacity: 0.5 }}
                            animate={{ 
                              scale: index === imageIndex ? 1.2 : 0.8,
                              opacity: index === imageIndex ? 1 : 0.5 
                            }}
                            transition={{ duration: 0.3 }}
                            className={`w-2 h-2 rounded-full ${index === imageIndex ? 'bg-white' : 'bg-neutral-600'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                {/* Navigation arrows */}
                <button
                  className='absolute left-2 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10'
                  onClick={() => paginate(-1)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </button>
                <button
                  className='absolute right-2 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10'
                  onClick={() => paginate(1)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              </motion.div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Hero