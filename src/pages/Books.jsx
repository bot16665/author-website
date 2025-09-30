import React from "react";
import { motion } from "framer-motion";
import bookImage from "../assets/books1d.png"; // replace with your book image

const Books = () => {
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

    const buttonVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.5
            }
        },
        hover: {
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(132, 204, 22, 0.3)",
            transition: {
                duration: 0.3
            }
        },
        tap: {
            scale: 0.95
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="bg-white text-gray-900 py-16 md:py-20">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1 
                        className="text-4xl md:text-5xl font-serif font-bold mb-4"
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        My Books
                    </motion.h1>
                    <motion.div 
                        className="w-20 h-1 bg-lime-400 mx-auto"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />
                    <motion.p 
                        className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto font-sans"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Discover the worlds I've created through my writing
                    </motion.p>
                </div>
            </div>

            {/* Main Book Section */}
            <div className="container mx-auto px-6 py-8 md:py-16">
                <motion.div 
                    className="flex flex-col lg:flex-row items-center lg:items-start gap-8 md:gap-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {/* Text Content - Left Side */}
                    <div className="flex-1 lg:pr-8">
                        <motion.h2 
                            className="text-2xl md:text-4xl font-serif font-bold text-gray-900 mb-4"
                            variants={textVariants}
                        >
                            The Unseen Crown
                        </motion.h2>
                        
                        <motion.div 
                            className="w-16 h-1 bg-lime-400 mb-6"
                            variants={textVariants}
                        />


                        <motion.p 
                            className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed font-sans"
                            variants={textVariants}
                        >
                            <span className="text-lime-600 font-semibold">"The Unseen Crown"</span> 
                            is my debut book — a journey of resilience, self-discovery, and the unseen strength we all carry within us. This book was born during the silence of the pandemic, and it speaks to anyone searching for hope, purpose, and inner courage.
                        </motion.p>

                        <motion.p 
                            className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed font-sans"
                            variants={textVariants}
                        >
                            Follow the protagonist's transformative journey as they uncover secrets 
                            that challenge everything they thought they knew about themselves and 
                            the world around them.
                        </motion.p>

                        {/* Book Details */}
                        <motion.div 
                            className="grid grid-cols-2 gap-4 mb-8"
                            variants={textVariants}
                        >
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <div className="text-sm text-gray-600 font-sans mb-1">Genre</div>
                                <div className="text-gray-900 font-semibold font-sans">Fiction / Fantasy</div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <div className="text-sm text-gray-600 font-sans mb-1">Pages</div>
                                <div className="text-gray-900 font-semibold font-sans">101 Pages</div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <div className="text-sm text-gray-600 font-sans mb-1">Language</div>
                                <div className="text-gray-900 font-semibold font-sans">English</div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <div className="text-sm text-gray-600 font-sans mb-1">Release Date</div>
                                <div className="text-gray-900 font-semibold font-sans">5 jun 2025</div>
                            </div>
                        </motion.div>

                        {/* Buy Buttons */}
                       <motion.div 
    className="flex flex-col sm:flex-row gap-4 mb-8"
    variants={buttonVariants}
>
    <motion.a
        href="https://amzn.in/d/3TPlYwl" // or your actual product URL
        className="flex-1 bg-lime-500 text-white py-3 px-6 rounded-lg font-sans font-semibold text-lg hover:bg-lime-600 transition-colors duration-200 flex items-center justify-center gap-2"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
    >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        Buy Now
    </motion.a>
</motion.div>

                       
                    </div>

                    {/* Book Image - Right Side */}
                    <motion.div 
                        className="flex-1 max-w-sm lg:max-w-md"
                        variants={imageVariants}
                    >
                        <div className="relative group">
                            <motion.img
                                src={bookImage}
                                alt="The Unseen Crown - Book Cover"
                                className="w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            />
                            {/* Decorative elements */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-lime-200 to-lime-100 rounded-xl -z-10 transform rotate-3 group-hover:rotate-4 transition-transform duration-500"></div>
                            <div className="absolute -inset-2 bg-gradient-to-r from-gray-200 to-gray-100 rounded-xl -z-20 transform -rotate-2 group-hover:-rotate-3 transition-transform duration-500"></div>
                            
                            {/* Bestseller Badge */}
                            <motion.div 
                                className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full font-sans font-bold text-sm shadow-lg"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 0.6, delay: 1 }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                BESTSELLER
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Reviews Section */}
                <motion.div 
                    className="mt-20 bg-gradient-to-r from-gray-50 to-lime-50 rounded-xl p-8 md:p-12 border border-gray-200"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 text-center mb-8">
                            What Readers Are Saying
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <div className="text-yellow-400 text-xl">★★★★★</div>
                                </div>
                                <p className="text-gray-700 font-sans mb-4 italic">
                                    "A mesmerizing debut! The Unseen Crown transported me to another world while making me reflect on my own journey. Anas Shaikh is a storyteller to watch."
                                </p>
                                <div className="text-gray-600 font-sans text-sm">- BookReview Weekly</div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <div className="text-yellow-400 text-xl">★★★★☆</div>
                                </div>
                                <p className="text-gray-700 font-sans mb-4 italic">
                                    "The characters felt so real, and the plot kept me turning pages late into the night. A remarkable achievement for a first-time author."
                                </p>
                                <div className="text-gray-600 font-sans text-sm">- Literary Insights</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Books;