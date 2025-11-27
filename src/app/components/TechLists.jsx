"use client"
import { animations } from "@/conf/conf";
import Marquee from "./Marquee";
import { skills } from "@/data/data";
import { motion } from "motion/react";

export default function TechLists() {
    return (
        <div className="mt-10">
            <motion.h2 
                className="text-xl font-medium before:content-['>'] before:mr-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={animations.headingVariants}
            >
                Tech Stack
            </motion.h2>
            <Marquee duration="10s">
                <div className="flex gap-8 mt-4">
                    {[...skills, ...skills].map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-2 w-[80px] p-2"
                        >
                            <div className="border-2 p-2 border-base-content/20 shadow-md rounded-sm dark:bg-base-content">
                                <img
                                    src={`${skill.icon}`}
                                    className="w-10 h-10"
                                    alt={`${skill.alt}`}
                                />
                            </div>
                            <span className="text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
}