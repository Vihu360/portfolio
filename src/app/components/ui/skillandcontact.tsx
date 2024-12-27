import { motion } from 'framer-motion';

const SkillsAndContact = () => {
  return (
    <>
      <motion.div
        className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent text-center"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          SKILLS
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:gap-8 px-4 sm:px-12 lg:px-20"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between p-6 sm:p-8 gap-8">
              <motion.div
                className="w-full lg:w-1/2 space-y-4 px-4 sm:px-8 lg:pl-20"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-center lg:text-left">
                  Frontend
                </h2>
                <p className="text-gray-400 text-center lg:text-left">
                  HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, MaterialUI, Framer Motion, Figma, UI UX design
                </p>
              </motion.div>

              <motion.div
                className="w-full lg:w-1/2 space-y-4 px-4 sm:px-8 lg:pl-20"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-center lg:text-left">
                  Backend
                </h2>
                <p className="text-gray-400 text-center lg:text-left">
                  NodeJS, ExpressJS, MongoDB, MySQL, Firebase, Prisma, NextAuth
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent text-center"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          CONTACT ME
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:gap-8 px-4 sm:px-12 lg:px-20"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between p-6 sm:p-8 gap-8">
              <motion.div
                className="w-full lg:w-1/2 space-y-4 px-4 sm:px-8"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-center lg:text-left">
                  Email
                </h2>
                <p className="text-gray-400 text-center lg:text-left">
                  <a href="mailto:Vivekbarnwal360@gmail.com" className="hover:underline hover:underline-offset-4">
                    Vivekbarnwal360@gmail.com
                  </a>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SkillsAndContact;