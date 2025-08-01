import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react"; 
import "../App.css"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative">
      <nav className="fixed w-full z-30 bg-gray-600/60 backdrop-blur-md text-gray-300 px-4 sm:px-10 py-5 flex justify-between items-center">
        <h1
          onClick={() => navigate("/")}
          className="cursor-pointer text-2xl sm:text-4xl shps text-white"
        >
          შპს "საჭე"
        </h1>

        <section className="hidden md:flex gap-8 text-sm items-center">
          <span onClick={() => navigate("/")} className="hover:scale-105 transition">
            მთავარი
          </span>
          <div
            className="relative"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <span className="hover:scale-105 transition">ჩვენს შესახებ</span>
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 bg-white border-2 border-black p-4 rounded-3xl shadow-lg text-black"
                >
                  <div className="flex flex-col gap-2">
                    <span
                      className="hover:text-blue-700 transition"
                      onClick={() => navigate("/About/Chvensshesaxeb")}
                    >
                      ჩვენ
                    </span>
                    <span
                      className="hover:text-blue-700 transition"
                      onClick={() => navigate("/About/Tanamshromlebi")}
                    >
                      თანამშრომლები
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <span onClick={() => navigate("/Services")} className="hover:scale-105 transition">
            სერვისები
          </span>
          <span onClick={() => navigate("/Contact")} className="hover:scale-105 transition">
            კონტაქტი
          </span>
        </section>

        <button className="hidden md:block text-xl w-[150px] h-[50px] bg-blue-800 rounded-2xl text-white hover:scale-105 transition hover:bg-blue-600 hover:shadow-lg">
          დაჯავშვნა
        </button>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          {mobileNavOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed top-[80px] left-0 right-0 bg-gray-700 z-20 text-white md:hidden p-6 space-y-4"
          >
            <span onClick={() => { navigate("/"); setMobileNavOpen(false); }} className="block">
              მთავარი
            </span>
            <div className="space-y-2">
              <span className="block">ჩვენს შესახებ</span>
              <div className="ml-4 space-y-1 text-gray-300">
                <span onClick={() => { navigate("/About/Chvensshesaxeb"); setMobileNavOpen(false); }} className="block">
                  ჩვენ
                </span>
                <span onClick={() => { navigate("/About/Tanamshromlebi"); setMobileNavOpen(false); }} className="block">
                  თანამშრომლები
                </span>
              </div>
            </div>
            <span onClick={() => { navigate("/Services"); setMobileNavOpen(false); }} className="block">
              სერვისები
            </span>
            <span onClick={() => { navigate("/Contact"); setMobileNavOpen(false); }} className="block">
              კონტაქტი
            </span>
            <button
              onClick={() => { setMobileNavOpen(false); }}
              className="w-full bg-blue-800 text-white py-2 rounded-xl mt-4 hover:bg-blue-600 transition"
            >
              დაჯავშვნა
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
