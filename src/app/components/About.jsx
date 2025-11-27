"use client";

import { animations } from "@/conf/conf";
import { about } from "../../data/data";
import { motion } from "motion/react";


export default function About() {
    return (
        <>
            <motion.div
                className="flex flex-col gap-2 mt-10 scroll-mt-14"
                id="about"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={animations.containerVariants}
            >
                <motion.h2 
                    className="text-xl font-medium before:content-['>'] before:mr-1"
                    variants={animations.headingVariants}
                >
                    About
                </motion.h2>

                <motion.div
                    className="flex gap-2 flex-col"
                >
                    <motion.p 
                        className="text-base text-base-content/80"
                        variants={animations.itemVariants}
                    >
                        {about.about}
                    </motion.p>

                    <motion.p 
                        className="text-base text-base-content/80"
                        variants={animations.itemVariants}
                    >
                        I'm always open to new opportunities and collaborations. Feel free to reach out via{" "}
                        <a
                            href={`mailto:${about.email}`}
                            className="font-bold hover:underline cursor-pointer"
                        >
                            email
                        </a>{" "}
                        I'd love to hear from you.
                    </motion.p>
                </motion.div>
            </motion.div>
        </>
    );
}