import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import bgImage from "../assets/bg.jpg"; // replace with your image

const Contact = () => {
    const formRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

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

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        // Map the form field names to state keys
        const stateKey = 
            name === 'from-name' ? 'name' :
            name === 'from-Email' ? 'email' :
            name === 'Message' ? 'message' : name;
        
        setFormData({
            ...formData,
            [stateKey]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Replace these with your actual EmailJS credentials
        const serviceID = "service_1srskdk";
        const templateID = "template_fvzhi1t";
        const publicKey = "BycAbkWdTLr3B73Vs";

        emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
            .then((result) => {
                console.log("Email sent successfully:", result.text);
                setIsLoading(false);
                setIsSent(true);
                setFormData({ name: "", email: "", message: "" });

                // Reset success message after 5 seconds
                setTimeout(() => {
                    setIsSent(false);
                }, 5000);
            })
            .catch((error) => {
                console.error("Error sending email:", error.text);
                setIsLoading(false);
                alert("There was an error sending your message. Please try again.");
            });
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Overlay for better readability */}
            <div className="min-h-screen bg-black/40 backdrop-blur-sm">

                {/* Header Section */}
                <div className="text-white py-16 md:py-20">
                    <div className="container mx-auto px-6 text-center">
                        <motion.h1
                            className="text-4xl md:text-5xl font-serif font-bold mb-4"
                            initial={{ y: -30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            Get In Touch
                        </motion.h1>
                        <motion.div
                            className="w-20 h-1 bg-lime-400 mx-auto"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        />
                        <motion.p
                            className="text-lg text-gray-200 mt-4 max-w-2xl mx-auto font-sans"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                        </motion.p>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="container mx-auto px-6 py-8 md:py-16">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                            {/* Contact Information */}
                            <motion.div
                                className="space-y-8"
                                variants={itemVariants}
                            >
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20">
                                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                                        Let's Start a Conversation
                                    </h2>
                                    <div className="w-16 h-1 bg-lime-400 mb-6"></div>
                                    <p className="text-gray-200 font-sans leading-relaxed">
                                        Whether you're a reader, fellow writer, or just want to say hello,
                                        I'm always excited to connect. Share your thoughts, questions, or
                                        feedback about my work.
                                    </p>
                                </div>

                                {/* Contact Details */}
                                <div className="space-y-6">
                                    <motion.div
                                        className="flex items-start gap-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                                        whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.15)" }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="w-12 h-12 bg-lime-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-lime-400/30">
                                            <svg className="w-6 h-6 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-serif font-semibold text-white mb-1">Email</h3>
                                            <p className="text-gray-200 font-sans">anasshaikh.author@gmail.com</p>
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                                    <h3 className="font-serif font-semibold text-white mb-4">Follow My Journey</h3>
                                    <div className="flex gap-4">
                                        {[
                                            {
                                                name: 'Facebook',
                                                url: 'https://www.facebook.com/share/1B3BBZjLNH/',
                                                icon: (
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                    </svg>
                                                )
                                            },
                                            {
                                                name: 'Instagram',
                                                url: 'https://www.instagram.com/anasshaikh__._?igsh=b2x1dWd2ZjZ1ZGEy',
                                                icon: (
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.2 14.816 3.71 13.665 3.71 12.368s.49-2.448 1.416-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.926.875 1.416 2.026 1.416 3.323s-.49 2.448-1.416 3.323c-.875.807-2.026 1.297-3.323 1.297z" />
                                                        <path d="M8.449 7.853c-2.474 0-4.515 2.041-4.515 4.515s2.041 4.515 4.515 4.515 4.515-2.041 4.515-4.515-2.041-4.515-4.515-4.515zm7.718 8.168c-.077.154-.231.231-.385.231h-1.645c-.154 0-.308-.077-.385-.231-.077-.154-.077-.308 0-.462l.77-1.645c.077-.154.231-.231.385-.231h1.645c.154 0 .308.077.385.231.077.154.077.308 0 .462l-.77 1.645z" />
                                                    </svg>
                                                )
                                            },
                                            {
                                                name: 'YouTube',
                                                url: 'https://youtube.com/@prodbykemani?si=TjAoNF-OAZm0aaXt',
                                                icon: (
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                                    </svg>
                                                )
                                            },
                                        ].map((social) => (
                                            <motion.a
                                                key={social.name}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-lime-500/30 hover:border-lime-400/50 border border-white/20 transition-all duration-200"
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                title={`Follow on ${social.name}`}
                                            >
                                                <span className="sr-only">{social.name}</span>
                                                {social.icon}
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Contact Form */}
                            <motion.div
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20"
                                variants={itemVariants}
                            >
                                {isSent ? (
                                    <motion.div
                                        className="text-center py-12"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="w-16 h-16 bg-lime-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-lime-400/30">
                                            <svg className="w-8 h-8 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-serif font-bold text-white mb-2">Message Sent!</h3>
                                        <p className="text-gray-200 font-sans">
                                            Thank you for your message. I'll get back to you soon.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-white font-sans mb-2">
                                                Full Name *
                                            </label>
                                            <motion.input
                                                type="text"
                                                id="name"
                                                name="from-name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition-colors duration-200 font-sans text-white placeholder-gray-300"
                                                placeholder="Enter your full name"
                                                whileFocus={{ scale: 1.02 }}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-white font-sans mb-2">
                                                Email Address *
                                            </label>
                                            <motion.input
                                                type="email"
                                                id="email"
                                                name="from-Email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition-colors duration-200 font-sans text-white placeholder-gray-300"
                                                placeholder="Enter your email address"
                                                whileFocus={{ scale: 1.02 }}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-white font-sans mb-2">
                                                Your Message *
                                            </label>
                                            <motion.textarea
                                                id="message"
                                                name="Message"
                                                rows={6}
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition-colors duration-200 font-sans text-white placeholder-gray-300 resize-none"
                                                placeholder="Tell me what's on your mind..."
                                                whileFocus={{ scale: 1.02 }}
                                            />
                                        </div>

                                        <motion.button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full bg-lime-500 text-white py-3 px-6 rounded-lg font-sans font-semibold text-lg hover:bg-lime-600 disabled:bg-lime-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2 border border-lime-400"
                                            whileHover={!isLoading ? { scale: 1.02, boxShadow: "0 10px 25px rgba(132, 204, 22, 0.3)" } : {}}
                                            whileTap={!isLoading ? { scale: 0.98 } : {}}
                                        >
                                            {isLoading ? (
                                                <>
                                                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                    </svg>
                                                    Send Message
                                                </>
                                            )}
                                        </motion.button>
                                    </form>
                                )}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;