"use client"
import { animations } from "@/conf/conf";
import { experience } from "../../data/data";
import { motion } from "motion/react";

export default function Experience() {
    return (
        <>
            <motion.div 
                className="mt-10 scroll-mt-14" 
                id="experience"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={animations.containerVariants}
            >
                <motion.h2 
                    className="text-xl font-medium before:content-['>'] before:mr-1"
                    variants={animations.headingVariants}
                >
                    Work Experience
                </motion.h2>
                <div className="mt-6">
                    <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200 dark:before:bg-gray-500 mt-4 p-2">
                        {experience.map((item, index) => (
                            <motion.li
                                key={index}
                                className="relative -ms-1.5 flex items-start gap-4"
                                variants={animations.itemVariants}
                            >
                                <span className="size-3 shrink-0 rounded-full bg-base-content"></span>

                                <div className="-mt-2">
                                    <time className="text-xs font-medium text-base-content/80">
                                        {item.date}
                                    </time>

                                    <h3 className="text-lg font-semibold text-base-content">
                                        {item.title}
                                    </h3>

                                    <p className="mt-0.5 text-sm text-base-content/80">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.li>
                        ))}
                    </ol>
                </div>
            </motion.div>
        </>
    );
}