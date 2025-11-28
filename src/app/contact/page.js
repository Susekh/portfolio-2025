"use client";

import React, { useState } from "react";
import { forms, seo } from "@/data/data";
import { motion } from "motion/react";
import toast, { Toaster } from 'react-hot-toast';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
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
        opacity: 0, 
        y: 20,
        filter: "blur(4px)"
    },
    visible: { 
        opacity: 1, 
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(forms.formspreeUrl, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                form.reset();
                toast.success('Message sent successfully!', {
                    duration: 4000,
                    position: 'bottom-center',
                });
            } else {
                toast.error('Failed to send message. Please try again.', {
                    duration: 4000,
                    position: 'bottom-center',
                });
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.', {
                duration: 4000,
                position: 'top-center',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Toaster />
            <div className="md:w-[700px] w-[100%] mt-5 p-4">
                <motion.main 
                    className="flex flex-col gap-4"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h1 
                        className="text-xl font-medium before:content-['>'] before:mr-1"
                        variants={headerVariants}
                    >
                        Contact Me
                    </motion.h1>
                    <motion.div 
                        className="p-1"
                        variants={itemVariants}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-4"
                        >
                            <motion.div variants={itemVariants}>
                                <label htmlFor="name" className="uppercase text-sm text-base-content/80 font-bold">
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    className="w-full mt-1 p-3 rounded-lg focus:outline-none border border-base-content/30 text-base-content focus:border-base-content transition-colors duration-200"
                                    type="text"
                                    name="name"
                                    required
                                    disabled={isSubmitting}
                                />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <label htmlFor="email" className="uppercase text-sm text-base-content/80 font-bold">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    className="w-full mt-1 p-3 rounded-lg focus:outline-none border border-base-content/30 text-base-content focus:border-base-content transition-colors duration-200"
                                    type="email"
                                    name="email"
                                    required
                                    disabled={isSubmitting}
                                />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <label htmlFor="message" className="uppercase text-sm text-base-content/80 font-bold">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    className="w-full mt-1 p-3 rounded-lg focus:outline-none border border-base-content/30 text-base-content focus:border-base-content transition-colors duration-200 min-h-[120px] resize-y"
                                    name="message"
                                    required
                                    disabled={isSubmitting}
                                ></textarea>
                            </motion.div>
                            <motion.div 
                                className="mt-2"
                                variants={itemVariants}
                            >
                                <button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="uppercase text-sm font-bold tracking-wide bg-base-content text-base-100 p-3 cursor-pointer hover:bg-base-content/90 rounded-lg w-full focus:outline-none transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg 
                                                className="animate-spin h-5 w-5" 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                fill="none" 
                                                viewBox="0 0 24 24"
                                            >
                                                <circle 
                                                    className="opacity-25" 
                                                    cx="12" 
                                                    cy="12" 
                                                    r="10" 
                                                    stroke="currentColor" 
                                                    strokeWidth="4"
                                                />
                                                <path 
                                                    className="opacity-75" 
                                                    fill="currentColor" 
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                />
                                            </svg>
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </motion.div>
                        </form>
                    </motion.div>
                </motion.main>
            </div>
        </>
    );
}

export default Contact;