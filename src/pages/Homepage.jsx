import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Homepage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-red-800 via-gray-900 to-black text-white w-full h-screen flex flex-col">
      <Header />

      <div className="flex-grow flex flex-col h-screen justify-center items-center relative px-4 text-center">
      
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src="/Logo.png"
          alt="Logo"
          className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[200px] rounded-full mb-4"
        />

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl logotext font-bold text-red-500 mb-2"
        >
          შპს საჭე
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-sm sm:text-base text-gray-400 mb-6"
        >
          თქვენი უსაფრთხო მგზავრობისთვის
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-lg sm:text-xl md:text-2xl font-medium"
        >
          ირჩევთ{" "}
          <span className="text-red-500 logotext font-semibold">
            შპს საჭეს?
          </span>{" "}
          — ირჩევთ სიმშვიდეს.
        </motion.h2>
      </div>
    </div>
  );
}
