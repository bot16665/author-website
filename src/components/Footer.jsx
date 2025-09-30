import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/share/1B3BBZjLNH/',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
            )
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/anasshaikh__._?igsh=b2x1dWd2ZjZ1ZGEy',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.2 14.816 3.71 13.665 3.71 12.368s.49-2.448 1.416-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.926.875 1.416 2.026 1.416 3.323s-.49 2.448-1.416 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                    <path d="M8.449 7.853c-2.474 0-4.515 2.041-4.515 4.515s2.041 4.515 4.515 4.515 4.515-2.041 4.515-4.515-2.041-4.515-4.515-4.515zm7.718 8.168c-.077.154-.231.231-.385.231h-1.645c-.154 0-.308-.077-.385-.231-.077-.154-.077-.308 0-.462l.77-1.645c.077-.154.231-.231.385-.231h1.645c.154 0 .308.077.385.231.077.154.077.308 0 .462l-.77 1.645z"/>
                </svg>
            )
        },
        {
            name: 'YouTube',
            url: 'https://youtube.com/@prodbykemani?si=TjAoNF-OAZm0aaXt',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
            )
        },
       
       
       
    ];

    return (
        <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-6 py-12 md:py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Brand & Contact */}
                    <motion.div 
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">
                                Anas Shaikh
                            </h3>
                            <div className="w-12 h-0.5 bg-lime-400 mb-4"></div>
                            <p className="text-gray-300 font-sans text-sm leading-relaxed">
                                Author & Writer  creating worlds one word at a time.
                            </p>
                        </div>
                    </motion.div>

                    {/* Reach Me Out Section */}
                    <motion.div 
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-xl font-serif font-semibold text-white">
                            Reach Me Out
                        </h4>
                        <div className="space-y-4">
                            <motion.a
                                href="anasshaikh.author@gmail.com"
                                className="flex items-center gap-3 text-gray-300 hover:text-lime-400 transition-colors duration-200 group"
                                whileHover={{ x: 5 }}
                            >
                                <div className="w-10 h-10 bg-lime-500/20 rounded-lg flex items-center justify-center group-hover:bg-lime-500/30 transition-colors duration-200">
                                    <svg className="w-5 h-5 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-sans text-sm">Email me at</p>
                                    <p className="font-sans font-medium">anasshaikh.author@gmail.com</p>
                                </div>
                            </motion.a>
                            
                            <motion.div 
                                className="flex items-center gap-3 text-gray-300"
                                whileHover={{ x: 5 }}
                            >
                               
                               
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div 
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-xl font-serif font-semibold text-white">
                            Connect With Me
                        </h4>
                        <p className="text-gray-300 font-sans text-sm">
                            Follow my writing journey and stay updated with my latest work.
                        </p>
                        
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-lime-500 hover:scale-110 border border-white/20 transition-all duration-200"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    title={`Follow on ${social.name}`}
                                >
                                    <span className="sr-only">{social.name}</span>
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Newsletter Subscription */}
                <motion.div 
                    className="mt-12 pt-8 border-t border-gray-700"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-md mx-auto text-center">
                        <h5 className="font-serif font-semibold text-white mb-3">
                            Stay Updated
                        </h5>
                        <p className="text-gray-300 font-sans text-sm mb-4">
                            Get notified about new book releases and writing updates.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition-colors duration-200 font-sans text-sm"
                            />
                            <motion.button
                                className="px-6 py-2 bg-lime-500 text-white rounded-lg font-sans font-medium text-sm hover:bg-lime-600 transition-colors duration-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 font-sans text-sm">
                            © {currentYear} Anas Shaikh. All rights reserved.
                        </p>
                        
                        <div className="flex items-center gap-6 text-sm text-gray-400 font-sans">
                            <motion.a
                                href="/privacy"
                                className="hover:text-lime-400 transition-colors duration-200"
                                whileHover={{ scale: 1.05 }}
                            >
                                Privacy Policy
                            </motion.a>
                            <motion.a
                                href="/terms"
                                className="hover:text-lime-400 transition-colors duration-200"
                                whileHover={{ scale: 1.05 }}
                            >
                                Terms of Service
                            </motion.a>
                            <motion.a
                                href="/contact"
                                className="hover:text-lime-400 transition-colors duration-200"
                                whileHover={{ scale: 1.05 }}
                            >
                                Contact
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;