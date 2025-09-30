import React from "react";
import { motion } from "framer-motion";
import authorImage from "../assets/author.jpeg"; // replace with your author image

const About = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const textVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { x: 50, opacity: 0, scale: 0.8 },
        visible: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section - White Background */}
            <div className="bg-white text-gray-900 py-16 md:py-20">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1 
                        className="text-4xl md:text-5xl font-serif font-bold mb-4"
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        About Me
                    </motion.h1>
                    <motion.div 
                        className="w-20 h-1 bg-lime-400 mx-auto"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-8 md:py-12">
                <motion.div 
                    className="flex flex-col lg:flex-row items-center lg:items-start gap-8 md:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {/* Text Content */}
                    <div className="flex-1 lg:pr-6">
                        <motion.h2 
                            className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-6"
                            variants={textVariants}
                        >
                            The Story Behind the Words
                        </motion.h2>
                        
                        <motion.p 
                            className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed font-sans"
                            variants={textVariants}
                        >
                            Hi, my name is Anas Shaikh, a writer from Mumbai, India, and the author of my debut book
                        </motion.p>

                        <motion.p 
                            className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed font-sans"
                            variants={textVariants}
                        >
                            <span className="text-lime-600 font-semibold">"The Unseen Crown"</span>. 
                            My writing journey began during the COVID-19 lockdown on 30 January 2020, a time when the world was silent and we were all confined to our homes. What started as a way to express my thoughts soon became a source of strength and self-discovery, eventually transforming into a lifelong passion...
                        </motion.p>

                        <motion.p 
                            className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed font-sans"
                            variants={textVariants}
                        >
                            Alongside my path as a writer, I hold a Bachelor of Commerce (Programming) degree, work in the IT field, and continue to pursue higher studies. I believe that learning never ends—for me, education is life itself.
                        </motion.p>

                        {/* Signature */}
                        <motion.div 
                            className="flex items-center gap-4 mt-8"
                            variants={textVariants}
                        >
                            <div className="w-12 h-0.5 bg-lime-400"></div>
                            <div className="text-gray-600 font-serif italic text-sm md:text-base">
                                "Every story is a journey, and every journey tells a story."
                            </div>
                        </motion.div>
                    </div>

                    {/* Author Image - Smaller Size */}
                    <motion.div 
                        className="flex-1 max-w-sm lg:max-w-md"
                        variants={imageVariants}
                    >
                        <div className="relative group">
                            <motion.img
                                src={authorImage}
                                alt="Anas Shaikh - Author"
                                className="w-full h-auto rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            />
                            {/* Decorative elements */}
                            <div className="absolute -inset-3 bg-gradient-to-r from-lime-200 to-lime-100 rounded-xl -z-10 transform rotate-2 group-hover:rotate-3 transition-transform duration-500"></div>
                            <div className="absolute -inset-2 bg-gradient-to-r from-gray-200 to-gray-100 rounded-xl -z-20 transform -rotate-1 group-hover:-rotate-2 transition-transform duration-500"></div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Writing Philosophy Section */}
                <motion.div 
                    className="mt-16 bg-gradient-to-r from-gray-50 to-lime-50 rounded-xl p-6 md:p-8 border border-gray-200"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-4">
                            Writing Philosophy
                        </h3>
                        <div className="w-16 h-0.5 bg-lime-400 mx-auto mb-6"></div>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-sans mb-6">
                            "I believe that every character has a soul, every plot has a heartbeat, and every 
                            story has the power to change someone's world. Writing, for me, is not just about 
                            putting words on paper—it's about creating universes where readers can lose 
                            themselves and find parts of themselves they never knew existed."
                        </p>
                        <div className="flex justify-center items-center gap-4 mt-4">
                            <div className="w-6 h-0.5 bg-lime-400"></div>
                            <span className="text-lime-600 font-serif font-semibold text-sm md:text-base">Anas Shaikh</span>
                            <div className="w-6 h-0.5 bg-lime-400"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;