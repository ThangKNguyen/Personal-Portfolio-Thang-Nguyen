import React from 'react'
import aboutImg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion"



const About = () => {
  return (
    <div id="about" className="border-b-2 border-neutral-900 pb-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.5 }} 
        className="my-20 text-center text-4xl font-bold">About Me</motion.h2>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <motion.img 
                       whileInView={{x:0, opacity:1}}
                       initial={{x:-100, opacity: 0}} 
                       transition={{duration:0.8, delay:0.2}}
                    className="rounded-xl" src={aboutImg} alt="San Francisco"></motion.img>
                </div>
            </div>

            <div className="w-full lg:w-1/2 ">
                    <motion.div 
                      whileInView={{x:0, opacity:1}}
                      initial={{x:100, opacity: 0}} 
                      transition={{duration:0.8, delay:0.2}}
                    className='flex justify-center lg:justifiy-start'>
                        <p className='my-2 max-w-xl py-6 text-xl'>{ABOUT_TEXT}</p>
                    </motion.div>
                </div>
        </div>
    </div>
  )
}

export default About