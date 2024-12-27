import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const AnimatedProjects = ({projectName, projectDescription, projectImage, projectLink} : {projectName: string, projectDescription: string,
  projectImage: string, projectLink: string
}) => {
  return (
    <motion.div 
      className="w-full px-4 sm:px-6 lg:px-8 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >

      <motion.div 
        className="grid grid-cols-1 gap-8 px-20"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <motion.div 
          className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl "
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between p-8 gap-8 ">
            <motion.div 
              className="lg:w-1/2 space-y-4 pl-20"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                {projectName}
              </h2>
              <p className="text-gray-300 text-lg pr-20 text-start">
                {projectDescription}
              </p>

              <Link href={projectLink} passHref>
              <motion.button
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                View Project
              </motion.button>
              </Link>
            </motion.div>

            <motion.div 
              className="lg:w-1/2"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
                <Link href={projectLink} passHref>
              <div className="relative group">
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-75 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={projectImage}
                    alt="CraftErsa Project"
                    width={500}
                    height={500}
                    className="rounded-xl mix-blend-overlay cursor-pointer"
                  />
                </motion.div>
                <Image 
                  src={projectImage}
                  alt="CraftErsa Project"
                  width={500}
                  height={500}
                  className="rounded-xl relative z-10 group-hover:opacity-0 transition-opacity cursor-pointer"
                  />
              </div>
                  </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default AnimatedProjects;