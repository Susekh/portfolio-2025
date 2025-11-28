"use client"
import { useState, useRef, useEffect } from "react";
import { animations } from "@/conf/conf";
import { skills } from "@/data/data";
import { motion, useMotionValue, useAnimationFrame, useDragControls } from "motion/react";

export default function TechLists() {
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const baseX = useMotionValue(0);
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            const width = containerRef.current.scrollWidth / 2;
            setContainerWidth(width);
        }
    }, []);

    useAnimationFrame((t, delta) => {
        if (!isHovered && !isDragging && containerWidth > 0) {
            const speed = -50; // pixels per second
            const moveBy = (speed * delta) / 1000;
            let newX = baseX.get() + moveBy;
            
            if (newX <= -containerWidth) {
                newX = 0;
            }
            
            baseX.set(newX);
        }
    });

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
            
            <div 
                className="relative overflow-hidden mt-4 cursor-grab active:cursor-grabbing"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    ref={containerRef}
                    className="flex gap-8"
                    style={{ x: baseX }}
                    drag="x"
                    dragConstraints={{ left: -containerWidth, right: 0 }}
                    dragElastic={0.1}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={() => setIsDragging(false)}
                >
                    {[...skills, ...skills, ...skills].map((skill, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center gap-2 w-[80px] p-2 flex-shrink-0"
                            whileHover={{ scale: 1.1, y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="border-2 p-2 border-base-content/20 shadow-md rounded-sm dark:bg-base-content transition-all hover:border-base-content/40 hover:shadow-lg">
                                <img
                                    src={`${skill.icon}`}
                                    className="w-10 h-10"
                                    alt={`${skill.alt}`}
                                    draggable={false}
                                />
                            </div>
                            <span className="text-sm">{skill.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}