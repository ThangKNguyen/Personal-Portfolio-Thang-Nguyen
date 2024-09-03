import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { SiRapid } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import Java from '../assets/java.webp'
import Python from '../assets/python.png'
import Firebase from '../assets/firebase.png'
import { FiFramer } from "react-icons/fi";
import { motion } from "framer-motion"

const iconVariants = (duration) =>({
  intitial: {y:-8},
  animate: {
    y: [8,-8],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

const Tech = () => {
  return (
    <div id="tech" className='border-b-2 border-neutral-800 pb-24'>
      <motion.h1 
      whileInView={{y:0, opacity:1}}
      initial={{y:-100, opacity: 0}} 
      transition={{duration:0.8, delay:0.2}}
      className='my-20 text-center text-4xl font-semibold'>Technologies & Languages</motion.h1>
  <motion.div 
  whileInView={{x:0, opacity:1}}
  initial={{x:-100, opacity: 0}} 
  transition={{duration:1, delay:0.2}}
  className='flex flex-wrap items-center justify-center gap-4'>
    <motion.div 
      variants={iconVariants(3)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4 text-center'>
      <RiReactjsLine className='text-7xl text-cyan-600 mb-1'/>
      <p className='text-sm'>ReactJS</p>
    </motion.div>

    <motion.div 
      variants={iconVariants(4)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4 text-center'>
      <RiTailwindCssFill className='text-7xl text-cyan-400 mb-1'/>
      <p className='text-sm'>Tailwind</p>
    </motion.div>

    <motion.div 
      variants={iconVariants(5)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4 text-center'>
      <img src={Firebase} className='mb-1 w-[72px]' alt="Firebase"/>
      <p className='text-sm'>Firebase</p>
    </motion.div>

    <motion.div 
      variants={iconVariants(6)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4 text-center'>
      <RiNextjsFill className='text-7xl mb-1'/>
      <p className='text-sm'>NextJs</p>
    </motion.div>

    <motion.div 
      variants={iconVariants(7)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4 text-center'>
      <SiMui className='text-7xl text-blue-600 mb-1'/>
      <p className='text-sm'>MUI</p>
    </motion.div>

    <motion.div 
      variants={iconVariants(8)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4 text-center'>
      <FiFramer className='text-7xl mb-1'/>
      <p className='text-sm'>Framer</p>
    </motion.div>

    <motion.div 
      variants={iconVariants(9)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4 text-center'>
      <FaBootstrap className='text-7xl text-purple-500 mb-1'/>
      <p className='text-sm'>Bootstrap</p>
    </motion.div>

    <motion.div 
      variants={iconVariants(10)}
      initial="initial"
      animate="animate"
      className='rounded-2xl border-4 border-neutral-800 p-4 text-center'>
      <SiRapid className='text-7xl text-blue-700 mb-1'/>
      <p className='text-sm'>RapidAPI</p>
    </motion.div>
</motion.div>

<motion.div 
whileInView={{x:0, opacity:1}}
initial={{x:-100, opacity: 0}} 
transition={{duration:1, delay:0.5}}
className='flex flex-wrap items-center justify-center gap-4 mt-6'>
  <motion.div 
    variants={iconVariants(10)}
    initial="initial"
    animate="animate"
    className='rounded-2xl border-4 border-neutral-800 p-4 text-center'>
    <img src={Java} className='mb-1 w-[72px]' alt="Java"/>
    <p className='text-sm'>Java</p>
  </motion.div>

  <motion.div 
    variants={iconVariants(9)}
    initial="initial"
    animate="animate"
    className='rounded-2xl border-4 border-neutral-800 p-4 text-center'>
    <IoLogoJavascript className='text-7xl text-yellow-400 mb-1'/>
    <p className='text-sm'>JavaScript</p>
  </motion.div>

  <motion.div 
    variants={iconVariants(8)}
    initial="initial"
    animate="animate"
    className='rounded-2xl border-4 border-neutral-800 p-4 text-center'>
    <img src={Python} className='mb-1 w-[72px]' alt="Python"/>
    <p className='text-sm'>Python</p>
  </motion.div>

  <motion.div 
    variants={iconVariants(7)}
    initial="initial"
    animate="animate"
    className='rounded-2xl border-4 border-neutral-800 p-4 text-center'>
    <FaHtml5 className='text-7xl text-orange-500 mb-1'/>
    <p className='text-sm'>HTML</p>
  </motion.div>

  <motion.div 
    variants={iconVariants(6)}
    initial="initial"
    animate="animate"
    className='rounded-2xl border-4 border-neutral-800 p-4 text-center'>
    <FaCss3Alt className='text-7xl text-blue-700 mb-1'/>
    <p className='text-sm'>CSS</p>
  </motion.div>
</motion.div>

    </div>
  )
}

export default Tech