import React from 'react'
import {PROJECTS} from "../constants"
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <div id="projects" className='border-b-2 border-neutral-900 pb-4 ' >
       <motion.h1 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1.5 }} 
            className='my-20 text-center text-4xl font-bold'
        >
        Projects
        </motion.h1>
        <div>
  {PROJECTS.map((project, index) => (
    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
      <div className='w-full lg:w-1/4 transition-transform duration-500 hover:scale-110'>
        <motion.img
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          src={project.image}
          width={180}
          height={180}
          alt={project.title}
          className='mb-6 rounded'
        />
      </div>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className='w-full max-w-xl lg:w-3/4'
      >
        <h6 className='mb-2 font-semibold'>{project.title}</h6>
        <p className='mb-4 text-neutral-400'>{project.description}</p>
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500 inline-block'
          >
            {tech}
          </span>
        ))}
        
        <div className="mt-7">
          <a key={index} href={project.demo} target="_blank" className="mr-2 rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-800 h-3">
            Demo 
          </a>
          <a key={index} href={project.github} target="_blank" className=" ml-2 rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700">
            Code
          </a>
        </div>
      </motion.div>
    </div>
  ))}
</div>

    </div>
  )
}

export default Projects