"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const navbarVariants = {
    hidden: { 
        opacity: 0, 
        y: -20,
        filter: "blur(4px)"
    },
    visible: { 
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.6,
            delay : 0.7,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

const menuVariants = {
    closed: {
        opacity: 0,
        y: -20,
        scale: 0.95,
        transition: {
            duration: 0.2,
            ease: [0.22, 1, 0.36, 1]
        }
    },
    open: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.05,
            delayChildren: 0.1
        }
    }
};

const menuItemVariants = {
    closed: {
        opacity: 0,
        x: -20
    },
    open: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

const hamburgerTopVariants = {
    closed: { rotate: 0, y: 0 },
    open: { 
        rotate: 45, 
        y: 12,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    }
};

const hamburgerMiddleVariants = {
    closed: { opacity: 1 },
    open: { 
        opacity: 0,
        transition: { duration: 0.2 }
    }
};

const hamburgerBottomVariants = {
    closed: { rotate: 0, y: 0 },
    open: { 
        rotate: -45, 
        y: -6,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    }
};

export default function Navbar() {
    const [hideOnMobile, setHideOnMobile] = useState(true);
    const pathname = usePathname();
    const [isDark, setIsDark] = useState(false);
    const blogs = pathname === "/blogs";

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setIsDark(savedTheme === "dark");
            document.documentElement.setAttribute("data-theme", savedTheme);
        } else {
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            setIsDark(prefersDark);
            document.documentElement.setAttribute(
                "data-theme",
                prefersDark ? "dark" : "light"
            );
        }
    }, []);

    const handleThemeChange = (checked) => {
        const newTheme = checked ? "dark" : "light";
        setIsDark(checked);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <>
            <div className="flex justify-center sticky top-2 items-center gap-[25px] w-full z-10 px-2">
                <motion.div 
                    className="w-full max-w-2xl lg:max-w-3xl border flex items-center sm:justify-center justify-between bg-gray-10/50 backdrop-blur-sm rounded-3xl py-2 px-4"
                    initial="hidden"
                    animate="visible"
                    variants={navbarVariants}
                >
                    <div className="flex items-center sm:gap-8 gap-5 w-full sm:justify-center justify-between">
                        <div className="flex items-center gap-4">
                            <AnimatePresence>
                                {!hideOnMobile && (
                                    <motion.ul
                                        className="w-[90vw] sm:w-full sm:flex-row flex-col sm:bg-transparent bg-base-200/95 backdrop-blur-md sm:static fixed top-16 left-[5%] rounded-2xl sm:border-transparent border shadow-lg sm:shadow-none mx-auto items-center text-base sm:p-0 p-6 gap-1 sm:gap-4 sm:flex"
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                        variants={menuVariants}
                                    >
                                        <motion.li 
                                            className="w-full sm:w-auto"
                                            variants={menuItemVariants}
                                        >
                                            <Link
                                                href="/#about"
                                                className="relative block py-3 px-2 sm:py-0 sm:px-0 group rounded-lg sm:rounded-none hover:bg-base-300/50 sm:hover:bg-transparent transition-colors"
                                                onClick={() => setHideOnMobile(true)}
                                            >
                                                About
                                                <span className="absolute left-2 sm:left-0 bottom-1 sm:bottom-0 w-0 h-[2px] bg-current transition-all duration-300 ease-out group-hover:w-[calc(100%-1rem)] sm:group-hover:w-full"></span>
                                            </Link>
                                        </motion.li>
                                        <motion.li 
                                            className="w-full sm:w-auto"
                                            variants={menuItemVariants}
                                        >
                                            <Link
                                                href="/projects"
                                                className="relative block py-3 px-2 sm:py-0 sm:px-0 group rounded-lg sm:rounded-none hover:bg-base-300/50 sm:hover:bg-transparent transition-colors"
                                                onClick={() => setHideOnMobile(true)}
                                            >
                                                Projects
                                                <span className="absolute left-2 sm:left-0 bottom-1 sm:bottom-0 w-0 h-[2px] bg-current transition-all duration-300 ease-out group-hover:w-[calc(100%-1rem)] sm:group-hover:w-full"></span>
                                            </Link>
                                        </motion.li>
                                        <motion.li 
                                            className="w-full sm:w-auto"
                                            variants={menuItemVariants}
                                        >
                                            <Link
                                                href="/#experience"
                                                className="relative block py-3 px-2 sm:py-0 sm:px-0 group rounded-lg sm:rounded-none hover:bg-base-300/50 sm:hover:bg-transparent transition-colors"
                                                onClick={() => setHideOnMobile(true)}
                                            >
                                                Experience
                                                <span className="absolute left-2 sm:left-0 bottom-1 sm:bottom-0 w-0 h-[2px] bg-current transition-all duration-300 ease-out group-hover:w-[calc(100%-1rem)] sm:group-hover:w-full"></span>
                                            </Link>
                                        </motion.li>
                                        <motion.li 
                                            className="w-full sm:w-auto"
                                            variants={menuItemVariants}
                                        >
                                            <Link
                                                href="/contact"
                                                className="relative block py-3 px-2 sm:py-0 sm:px-0 group rounded-lg sm:rounded-none hover:bg-base-300/50 sm:hover:bg-transparent transition-colors"
                                                onClick={() => setHideOnMobile(true)}
                                            >
                                                Contact
                                                <span className="absolute left-2 sm:left-0 bottom-1 sm:bottom-0 w-0 h-[2px] bg-current transition-all duration-300 ease-out group-hover:w-[calc(100%-1rem)] sm:group-hover:w-full"></span>
                                            </Link>
                                        </motion.li>
                                        <motion.li 
                                            className="w-full sm:w-auto block sm:hidden"
                                            variants={menuItemVariants}
                                        >
                                            <Link
                                                href={blogs ? "/" : "/blogs"}
                                                className="relative block py-3 px-2 sm:py-0 sm:px-0 group rounded-lg sm:rounded-none hover:bg-base-300/50 sm:hover:bg-transparent transition-colors"
                                                onClick={() => setHideOnMobile(true)}
                                            >
                                                {blogs ? "Home" : "Blogs"}
                                                <span className="absolute left-2 sm:left-0 bottom-1 sm:bottom-0 w-0 h-[2px] bg-current transition-all duration-300 ease-out group-hover:w-[calc(100%-1rem)] sm:group-hover:w-full"></span>
                                            </Link>
                                        </motion.li>
                                    </motion.ul>
                                )}
                            </AnimatePresence>

                            {/* Desktop menu - always visible */}
                            <ul className="hidden sm:flex flex-row items-center gap-4">
                                <li>
                                    <Link
                                        href="/#about"
                                        className="relative block group"
                                    >
                                        About
                                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 ease-out group-hover:w-full"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/projects"
                                        className="relative block group"
                                    >
                                        Projects
                                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 ease-out group-hover:w-full"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/#experience"
                                        className="relative block group"
                                    >
                                        Experience
                                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 ease-out group-hover:w-full"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="relative block group"
                                    >
                                        Contact
                                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 ease-out group-hover:w-full"></span>
                                    </Link>
                                </li>
                            </ul>

                            <Link
                                href="/blogs"
                                className="relative hidden sm:block group"
                            >
                                Blogs
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 ease-out group-hover:w-full"></span>
                            </Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <motion.button
                                className="flex sm:hidden p-1 w-8 h-8 items-center justify-center"
                                onClick={() => {
                                    setHideOnMobile(!hideOnMobile);
                                }}
                                aria-label="Toggle menu"
                                animate={hideOnMobile ? "closed" : "open"}
                            >
                                <div className="w-5 h-4 flex flex-col justify-between">
                                    <motion.span 
                                        className="w-full h-0.5 bg-current rounded-full"
                                        variants={hamburgerTopVariants}
                                    />
                                    <motion.span 
                                        className="w-full h-0.5 bg-current rounded-full"
                                        variants={hamburgerMiddleVariants}
                                    />
                                    <motion.span 
                                        className="w-full h-0.5 bg-current rounded-full"
                                        variants={hamburgerBottomVariants}
                                    />
                                </div>
                            </motion.button>
                            <button className="flex" aria-label="Toggle theme">
                                <label className="toggle text-base-content toggle-sm">
                                    <input
                                        type="checkbox"
                                        checked={isDark}
                                        onChange={(e) =>
                                            handleThemeChange(e.target.checked)
                                        }
                                        className="theme-controller"
                                    />

                                    <svg
                                        aria-label="sun"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="4"
                                            ></circle>
                                            <path d="M12 2v2"></path>
                                            <path d="M12 20v2"></path>
                                            <path d="m4.93 4.93 1.41 1.41"></path>
                                            <path d="m17.66 17.66 1.41 1.41"></path>
                                            <path d="M2 12h2"></path>
                                            <path d="M20 12h2"></path>
                                            <path d="m6.34 17.66-1.41 1.41"></path>
                                            <path d="m19.07 4.93-1.41 1.41"></path>
                                        </g>
                                    </svg>

                                    <svg
                                        aria-label="moon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                                        </g>
                                    </svg>
                                </label>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}