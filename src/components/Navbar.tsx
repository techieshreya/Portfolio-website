"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            className="relative z-50 w-full px-6 py-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="paper-card rotate-1-ccw px-6 py-4 flex justify-between items-center rounded-sm bg-white text-slate-900 border-b-4 border-slate-300">
                    {/* Chrome pins */}
                    <motion.div
                        className="pin pin-chrome left-4 top-3"
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.3 }}
                    />
                    <motion.div
                        className="pin pin-chrome right-4 top-3"
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.4 }}
                    />

                    {/* Logo */}
                    <div className="flex items-center gap-4 mt-2">
                        <div className="w-10 h-10 bg-blueprint-dark text-electric-blue flex items-center justify-center font-bold text-lg rounded-sm shadow-sm border border-slate-600">
                            &lt;/&gt;
                        </div>
                        <span className="font-bold text-2xl tracking-tighter uppercase font-mono text-slate-800">
                            DEV_<span className="text-safety-orange">ENGINEER</span>
                        </span>
                    </div>

                    {/* Navigation links */}
                    <div className="hidden md:flex gap-8 items-center font-bold text-sm uppercase tracking-wider font-mono text-slate-600">
                        <a className="hover:text-safety-orange transition-colors" href="#stack">
                            Stack
                        </a>
                        <a className="hover:text-safety-orange transition-colors" href="#projects">
                            Projects
                        </a>
                        <a className="hover:text-safety-orange transition-colors" href="#experience">
                            Experience
                        </a>
                    </div>

                    {/* CTA */}
                    <button className="bg-safety-orange text-white px-5 py-2 font-bold uppercase shadow-sharp hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all text-sm rounded-sm tracking-wide border border-orange-700">
                        Contact Me
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
