import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import bgImage from "../assets/bg.jpg"; // replace with your image

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const titleVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
                delay: 0.3
            }
        }
    };

    const subtitleVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.6
            }
        }
    };

    const lineVariants = {
        hidden: { scaleX: 0 },
        visible: {
            scaleX: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.9
            }
        }
    };

    const bookVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                delay: 1.1
            }
        }
    };

    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            scale: 0.9,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const menuItemVariants = {
        closed: { x: -50, opacity: 0 },
        open: (i) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    const floatingAnimation = {
        y: [-10, 10, -10],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <motion.div
            className="relative w-full h-screen backdrop-blur-[1px] bg-cover bg-center flex flex-col overflow-hidden"
            style={{ backgroundImage: `url(${bgImage})` }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-lime-300/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Navbar - Removed blur background */}
            <motion.nav
                className="flex items-center justify-between px-6 md:px-16 h-20 md:h-24 relative z-20"
                variants={navVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Mobile Menu Button */}
                <motion.button
                    onClick={() => setIsOpen(true)}
                    className="md:hidden text-lime-300 text-2xl hover:text-lime-400 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FiMenu />
                </motion.button>

                {/* Logo */}
                <motion.h1
                    className="text-white font-bold text-xl md:text-3xl font-serif tracking-wide"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    Anas Shaikh
                </motion.h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 text-white font-medium text-lg">
                    {[
                        { name: "Home", href: "#home" },
                        { name: "About Me", href: "#about" },
                        { name: "Books", href: "#books" },
                        { name: "Contact", href: "#contact" },
                    ].map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className="hover:text-lime-300 transition-colors duration-200 font-sans relative"
                            whileHover={{ y: -2 }}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                        >
                            {link.name}
                            <motion.div
                                className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-300"
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.a>
                    ))}
                </div>

            </motion.nav>

            {/* Center Content */}
            <div className="flex-1 flex flex-col items-center justify-center z-10 px-6 text-center">
                <div className="max-w-4xl space-y-6">
                    <motion.h2
                        variants={titleVariants}
                        className="text-white font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif leading-tight"
                        animate={floatingAnimation}
                    >
                        Anas Shaikh
                    </motion.h2>

                    <motion.div
                        variants={lineVariants}
                        className="w-20 h-1 bg-lime-300 mx-auto"
                    />

                    <motion.p
                        variants={subtitleVariants}
                        className="text-white font-light text-lg sm:text-xl md:text-2xl font-sans italic mb-4"
                    >
                        Author & Writer from Mumbai
                    </motion.p>

                    <motion.p
                        variants={bookVariants}
                        className="text-lime-300 font-medium text-base sm:text-lg md:text-xl font-sans"
                        whileHover={{ scale: 1.05 }}
                    >
                        Author of <span className="font-semibold">"The Unseen Crown"</span>
                    </motion.p>
                </div>
            </div>

            {/* Mobile Fullscreen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-gradient-to-br from-black to-gray-900 flex flex-col z-50"
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        {/* Top Bar */}
                        <motion.div
                            className="flex items-center justify-between h-20 px-6 border-b border-gray-700"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.button
                                onClick={() => setIsOpen(false)}
                                className="text-lime-300 text-2xl hover:text-lime-400 transition-colors duration-200"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FiX />
                            </motion.button>

                            <motion.h1
                                className="text-white font-bold text-xl font-serif tracking-wide"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                Anas Shaikh
                            </motion.h1>

                            <div className="w-6"></div>
                        </motion.div>

                        {/* Menu Links */}
                        <div className="flex flex-1 flex-col items-center justify-center space-y-10 px-6">
                            {[
                                { name: "Home", href: "#home" },
                                { name: "Books", href: "#books" },
                                { name: "About Me", href: "#about" },
                                { name: "Contact", href: "#contact" },
                            ].map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white text-3xl font-serif hover:text-lime-300 transition-all duration-300"
                                    variants={menuItemVariants}
                                    initial="closed"
                                    animate="open"
                                    custom={index}
                                    whileHover={{
                                        scale: 1.1,
                                        x: 10,
                                    }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>


                        {/* Bottom decorative element */}
                        <motion.div
                            className="h-20 flex items-center justify-center border-t border-gray-700"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <p className="text-gray-400 text-sm font-sans">
                                Author & Writer from Mumbai
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Navbar;   