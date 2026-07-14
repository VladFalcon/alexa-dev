import React from 'react';
import { motion } from 'framer-motion';

export default function Philosophy() {
    return (
        <section id="philosophy" className="py-28 bg-zinc-950 border-t border-zinc-900">
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto px-4 text-center space-y-8"
            >
                <h2 className="text-4xl md:text-5xl font-condensed font-black uppercase tracking-widest text-white">History & Philosophy</h2>
                <div className="h-1.5 w-24 bg-amber-500 mx-auto"></div>
                <div className="text-zinc-300 text-lg leading-relaxed space-y-6 max-w-3xl mx-auto">
                    <p>My competitive evolution in high-performance sports is anchored on uncompromising, rigorous discipline. Practical shooting systems challenge far more than foundational mechanical control; they are an exhaustive mental test of handling human variables, time constraints, and tool telemetry concurrently.</p>
                    <p>Standing on international podiums displaying the Ukrainian colors is a profound, career-defining honor. Every world stage execution remains an operational objective to prove that calculated focus, resilience, and systematic conditioning break through any constraint.</p>
                </div>
            </motion.div>
        </section>
    );
}