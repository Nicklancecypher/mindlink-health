"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const emojiVariants = {
  float: {
    y: [-10, 10, -10],
    transition: { duration: 4, repeat: Infinity, repeatType: "mirror" },
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-purple-50 flex flex-col items-center justify-center px-6 relative overflow-hidden">
      
      {/* Floating Emojis */}
      
      <motion.span
        className="absolute text-3xl"
        style={{ top: "10%", left: "15%" }}
        variants={emojiVariants}
        animate="float"
      >
        😊
      </motion.span>
      
      <motion.span
        className="absolute text-3xl"
        style={{ top: "30%", left: "70%" }}
        variants={emojiVariants}
        animate="float"
      >
        😌
      </motion.span>
      
      <motion.span
        className="absolute text-3xl"
        style={{ top: "70%", left: "40%" }}
        variants={emojiVariants}
        animate="float"
      >
        😓
      </motion.span>

      {/* Hero / Logo */}
      
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center space-y-4 z-10"
      >
        <div className="w-28 h-28 bg-black rounded-full flex items-center justify-center text-white font-bold text-4xl shadow-lg">
          ML
        </div>
        <h1 className="text-5xl font-bold text-black text-center">
          MindLink
        </h1>
        <p className="max-w-lg text-center text-gray-700 text-lg">
          
          Anonymous, pre-crisis support for students navigating stress, burnout, or emotional overload.
        </p>
      </motion.div>

      {/* CTA Buttons */}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-10 flex flex-col space-y-4 w-full max-w-sm z-10"
      >
        <Link
          href="/welcome"
          className="bg-black text-white py-3 rounded-xl text-center text-lg font-medium hover:bg-gray-800 transition"
        >
          Get Started
        </Link>
        <Link
          href="/about"
          className="border border-black py-3 rounded-xl text-center text-black text-lg font-medium hover:bg-black hover:text-white transition"
        >
          Learn More
        </Link>
      </motion.div>

      {/* Features Section */}
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="mt-20 max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center z-10"
      >
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Anonymous</h3>
          <p className="text-gray-600">
            No names, no emails, no tracking. Just safe space.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          
          <h3 className="text-xl font-semibold mb-2">AI Companion</h3>
          <p className="text-gray-600">
            Gentle guidance and reflection, never diagnosis.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Peer Support</h3>
          <p className="text-gray-600">
            Connect anonymously with others feeling the same pressures.
          </p>
        </div>
      </motion.div>

      <motion.footer
        
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="mt-24 text-gray-500 text-sm text-center z-10"
      >
        &copy; {new Date().getFullYear()} MindLink — Privacy-first mental health support for students
        
      </motion.footer>
    </main>
  );
}
