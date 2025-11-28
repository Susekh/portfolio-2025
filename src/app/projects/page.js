"use client";

import React from "react";
import { projects, seo } from "@/data/data";
import { motion } from "motion/react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1
        }
    }
};

const headerVariants = {
    hidden: { 
        opacity: 0, 
        x: -20,
        filter: "blur(4px)"
    },
    visible: { 
        opacity: 1, 
        x: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

const itemVariants = {
    hidden: { 
        opacity: 0
    },
    visible: { 
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08
        }
    }
};

const contentItemVariants = {
    hidden: { 
        opacity: 0, 
        x: -20
    },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

function Projects() {
    return (
        <div className="md:w-[700px] w-[100%] mt-5 p-4">
            <motion.main 
                className="flex flex-col gap-2"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h1 
                    className="text-xl font-medium before:content-['>'] before:mr-1"
                    variants={headerVariants}
                >
                    All Projects
                </motion.h1>
                <div className="flex flex-col gap-2">
                    {projects.pinProjects.map((item, index) => (
                        <motion.a
                            href={item.link}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group cursor-pointer p-4 border-2 border-base-content/20 hover:border-base-content/80 rounded-2xl hover:scale-102 transition-transform duration-200"
                            variants={itemVariants}
                        >
                            <motion.div 
                                className="flex flex-col gap-2 justify-between"
                                variants={contentVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <motion.div 
                                    className="flex items-center justify-between"
                                    variants={contentItemVariants}
                                >
                                    <h2 className="font-semibold text-lg">
                                        {item.title}
                                    </h2>
                                    <svg
                                        focusable="false"
                                        preserveAspectRatio="xMidYMid meet"
                                        fill="currentColor"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 32 32"
                                        aria-hidden="true"
                                        className="transform transition-transform duration-300 group-hover:rotate-45 group-active:rotate-45"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M10 6L10 8 22.59 8 6 24.59 7.41 26 24 9.41 24 22 26 22 26 6 10 6z"></path>
                                    </svg>
                                </motion.div>
                                <motion.p 
                                    className="text-base-content/80 text-sm sm:text-base"
                                    variants={contentItemVariants}
                                >
                                    {item.description}
                                </motion.p>
                                <motion.div 
                                    className="flex items-center flex-wrap gap-2 mt-1"
                                    variants={contentItemVariants}
                                >
                                    {item.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs border-gray-400 font-medium text-base-content/70 border rounded-md px-4"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </motion.a>
                    ))}
                    {projects.otherProjects.map((item, index) => (
                        <motion.a
                            href={item.link}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group cursor-pointer p-4 border-2 border-base-content/20 hover:border-base-content/80 rounded-2xl hover:scale-102 transition-transform duration-200"
                            variants={itemVariants}
                        >
                            <motion.div 
                                className="flex flex-col gap-2 justify-between"
                                variants={contentVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <motion.div 
                                    className="flex items-center justify-between"
                                    variants={contentItemVariants}
                                >
                                    <h2 className="font-semibold text-lg">
                                        {item.title}
                                    </h2>
                                    <svg
                                        focusable="false"
                                        preserveAspectRatio="xMidYMid meet"
                                        fill="currentColor"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 32 32"
                                        aria-hidden="true"
                                        className="transform transition-transform duration-300 group-hover:rotate-45 group-active:rotate-45"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M10 6L10 8 22.59 8 6 24.59 7.41 26 24 9.41 24 22 26 22 26 6 10 6z"></path>
                                    </svg>
                                </motion.div>
                                <motion.p 
                                    className="text-base-content/80 text-sm sm:text-base"
                                    variants={contentItemVariants}
                                >
                                    {item.description}
                                </motion.p>
                                <motion.div 
                                    className="flex items-center flex-wrap gap-2 mt-1"
                                    variants={contentItemVariants}
                                >
                                    {item.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs border-gray-400 font-medium text-base-content/70 border rounded-md px-4"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </motion.a>
                    ))}
                </div>
            </motion.main>
        </div>
    );
}

export default Projects;