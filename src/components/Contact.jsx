import React from 'react'
import { FaHouse } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from 'react-icons/fa'
import { motion } from "framer-motion"
import { FaCopyright } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id ="contact" className='border-b border-neutral-900 pb-5'>
        <motion.h2 
         whileInView={{y:0, opacity:1}}
         initial={{y:-80, opacity: 0}} 
         transition={{duration:0.8, delay:0.2}}
        className='my-10 text-center text-4xl font-bold '>Contact</motion.h2>
        <div className='text-center tracking-tighter text-xl'>
            <motion.div 
             whileInView={{x:0, opacity:1}}
             initial={{x:-80, opacity: 0}} 
             transition={{duration:0.5, delay:0.2}}
            className='flex items-center justify-center my-4'>
                <FaHouse className='mr-2' />
                <p>San Francisco Bay Area</p>
            </motion.div>
            <motion.div 
             whileInView={{x:0, opacity:1}}
             initial={{x:80, opacity: 0}} 
             transition={{duration:0.5, delay:0.2}}
            className='flex items-center justify-center my-4'>
                <CiMail className='mr-2' />
                <p>thangknguyensj@gmail.com</p>
            </motion.div>

            <motion.div 
             whileInView={{y:0, opacity:1}}
             initial={{y:80, opacity: 0}} 
             transition={{duration:0.5, delay:0.2}}
            className='flex items-center justify-center my-4'>
                <FaPhoneAlt className='mr-2' />
                <p>669-214-1736</p>
            </motion.div>

            <div className='flex items-center justify-center my-4'>
                <FaLinkedin className='mr-2' />
                <a href="https://www.linkedin.com/in/thang-nguyen-cs/" target="_blank" className='border-b'>
                    LinkedIn
                </a>
            </div>

            <div className='flex items-center justify-center mt-20 mb-0 text-base italic'>
                <FaCopyright className='mr-1' /> 2024 by Thang Nguyen
            </div>
        </div>
    </div>
  )
}

export default Contact