"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "./ui/animated-text";
import Navbar from "./navbar";
import AnimatedProjects from "./ui/animated-projects";
import SkillsAndContact from "./ui/skillandcontact";

export const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">

            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <AnimatedText
                        text={`Product DESIGNER  X   DEVELOPER`}
                        className="text-4xl md:text-6xl font-bold text-gray-200  mb-6 leading-tight"
                    />
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Product designer and developer crafting exceptional user experiences
                    </p>
                </motion.div>

                <motion.p>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto p-2"><span className="bg-gray-800 bg-opacity-75 p-1 
                    rounded-md text-white">I bring designs to life </span>—starting in Figma, finishing with code. From pixel-perfect layouts to scalable
                        solutions, I&apos;m the bridge between looks great and works great.
                    </p>
                </motion.p>

                <div>
                </div>
            </div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * 1 }}
                className="mb-8 text-center"
            >
                <p className="text-lg text-white max-w-2xl mx-auto border p-1 bg-gray-800 bg-opacity-15 rounded-md mb-24">
                    open for opportunities.
                </p>
            </motion.p>

            <motion.h1
                className="text-6xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                PROJECTS
            </motion.h1>

            <AnimatedProjects
                projectName="CraftErsa"
                projectDescription="Designed and developed the Ui of the CraftErsa platform, a platform for creating short videos with the help of Artifical Intelligence.
                Created the each element of website with color selection and themes."
                projectImage="/craftersa.png"
                projectLink="https://vid.craftersa.com/"
            />

            <AnimatedProjects
                projectName="Predito Game"
                projectDescription="A platform for creating and sharing unique and personalized products."
                projectImage="/game.png"
                projectLink="https://predito-game.vercel.app/"
            />

            <AnimatedProjects
                projectName="Food ordering mobile app UI"
                projectDescription="Created a food ordering mobile app UI using Figma which include the login, signup, home screen and other pages."
                projectImage="/food.png"
                projectLink="https://www.figma.com/design/uDn4cmZHV2IgruVkpDooR0/Untitled?node-id=0-1&t=jPkMq4PX5XZEB2bo-1"
            />

        <SkillsAndContact />

        </section>
    );
};