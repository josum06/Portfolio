import React from 'react'
import { FaReact, FaNodeJs } from "react-icons/fa";  // React & Node.js icons
import { SiMongodb, SiNextdotjs , SiExpress} from "react-icons/si"; // MongoDB & Next.js icons


function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h2 className='my-20 text-center text-4xl'>Technogies</h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaReact  className='text-7xl text-cyan-400 '/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaNodeJs  className='text-7xl text-green-500 '/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMongodb  className='text-7xl text-green-500 '/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiNextdotjs  className='text-7xl  '/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiExpress  className='text-7xl  text-yellow-500'/>
        </div>

      </div>
    </div>
  )
}

export default Technologies
