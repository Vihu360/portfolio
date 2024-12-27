"use client";

import { motion } from "framer-motion";
import { Code, Sparkles, Palette } from "lucide-react";
import { AnimatedText } from "./ui/animated-text";
import Navbar from "./navbar";
import Image from "next/image";
import AnimatedProjects from "./ui/animated-projects";
import Link from "next/link";

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
                        solutions, I'm the bridge between looks great and works great.
                    </p>
                </motion.p>

                <div>

                    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { icon: Palette, text: "UI/UX Design", color: "from-purple-500 to-pink-500" },
            { icon: Code, text: "Development", color: "from-blue-500 to-cyan-500" },
            { icon: Sparkles, text: "Animation", color: "from-amber-500 to-orange-500" }
            ].map((item, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * (index + 1) }}
                className="relative group"
                >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} p-2 mb-4 mx-auto`}>
                <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.text}</h3>
                <p className="text-gray-400">
                Creating exceptional digital experiences through innovative solutions
                </p>
                </div>
                </motion.div>
                ))}
                </div> */}
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

            <motion.div
                className="w-full px-4 sm:px-6 lg:px-8 py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >

                <motion.h1
                    className="text-6xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent flex justify-center items-center"
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    SKILLS
                </motion.h1>

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
                                    Frontend
                                </h2>
                                <p className="text-gray-400">
                                    HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, MaterialUI, Framer Motion, Figma, UI UX design
                                </p>
                            </motion.div>

                            <motion.div
                                className="lg:w-1/2 space-y-4 pl-20"
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                                    Backend
                                </h2>
                                <p className="text-gray-400">
                                    NodeJS, ExpressJS, MongoDB, MySQL, Firebase, Prisma, NextAuth
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>

            </motion.div>


            <motion.div
            >

                <motion.div
                    className="w-full px-4 sm:px-6 lg:px-8 py-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >

                    <motion.h1
                        className="text-6xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                        initial={{ y: -50 }}
                        animate={{ y: 0 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        CONTACT ME
                    </motion.h1>

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
                                    className="lg:w-1/2 space-y-4"
                                    initial={{ x: -100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                                        Email
                                    </h2>
                                    <p className="text-gray-400">
                                        <a href="mailto:Vivekbarnwal360@gmail.com" className="hover:underline hover:underline-offset-4">Vivekbarnwal360@gmail.com</a>
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>

                </motion.div>

            </motion.div>

        </section>
    );
};