import React from 'react'
import profilePic from "../assets/thangpiccropped.png"
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
  return (
    <div className=' border-b-2 border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>

            <div className='w-full lg:w-1/2 text-center '>
                <div className="flex flex-col items-center">
                  <TypeAnimation
                      sequence={[
                        'Thang Nguyen'
                      ]}
                      wrapper="h1"
                      speed={50}
                      style={{ 
                        fontSize: '6rem', 
                        fontWeight: '400', 
                        letterSpacing: '0em', 
                        textAlign: 'center' 
                      }}
                      className="pb-16 lg:mt-16 lg:text-8xl"
                      repeat={0}
                      cursor={false}
                    />
                </div>
                <motion.div 
                  initial={{x:-100, opacity: 0}} 
                  animate ={{x:0, opacity:1}}
                  transition={{duration:0.5, delay:1}}
                className="mt-2 pb-2 bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 bg-clip-text text-6xl 
                tracking-tight text-transparent">Software Engineer</motion.div>

                <motion.div 
                  initial={{x:-100, opacity: 0}} 
                  animate ={{x:0, opacity:1}}
                  transition={{duration:0.5, delay:1}}
                className="mt-6 bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 bg-clip-text text-6xl 
                tracking-tight text-transparent">&</motion.div>

                <motion.div 
                  initial={{x:-100, opacity: 0}} 
                  animate ={{x:0, opacity:1}}
                  transition={{duration:0.5, delay:1}}
                className="mt-6 bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 bg-clip-text text-6xl 
                tracking-tight text-transparent ">Computer Scientist</motion.div>
              
                <motion.div 
                initial={{y:100, opacity: 0}} 
                animate ={{y:0, opacity:1}}
                transition={{duration:0.5, delay:1}}

                className="button-container">
                  <a href='https://drive.google.com/file/d/1DuDgKdtnZ0MgUa00AO6yCBqODslHaSEn/view' target='_blank' className="button">
                    Resume
                    <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                      <path
                        clipRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </a>

                  <a 
                    href="https://github.com/ThangKNguyen" 
                    target="_blank" 
                    className="relative group icon-button"
      >
                    <FaGithub className='text-5xl transition-transform duration-200 hover:scale-110' />
                    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      GitHub
                    </span>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/thang-nguyen-cs/" 
                    target="_blank" 
                    className="relative group icon-button"
                  >
                    <FaLinkedin className='text-5xl text-blue-600 bg-white transition-transform duration-200 hover:scale-110' />
                    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      LinkedIn
                    </span>
                  </a>

                </motion.div>
                

             
            </div>

            <div className='w-full lg:w-1/2 lg:p-8'>
              <div className='flex justify-center'>
                <motion.img 
                  initial={{x: 100, opacity: 0}} 
                  animate={{x: 0, opacity: 1}}
                  transition={{duration: 0.7, delay: 1}}
                  className="mt-10 rounded-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg lg:pl-10 xl:max-w-xl mx-auto"
                  src={profilePic} 
                  alt='Profile Picture' 
                />
              </div>
            </div>

        </div>
    </div>
  )
}

export default Hero