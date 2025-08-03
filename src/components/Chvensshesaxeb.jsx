import React, { useState } from "react";
import Header from "./Header";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";

const paragraphs = [
  `შპს "საჭე" საქართველოში ავტოსერვისის სფეროში მოქმედი ლიდერი კომპანიაა, რომელიც საქმიანობას ეწევა 2011 წლიდან, ხოლო ამ კომპანიაში მოღვაწე მუშაკებისა და ავტოხელოსნების პროფესიონალიზმი წლების განმავლობაში მათ მიერ შეკეთებული ავტომობილების ხარისხითა და მადლიერი კლიენტების გამოხმაურებებითაა დადასტურებული.`,
  `შპს "საჭე" დასპეცილიზებულია საჭის მართვის მექანიზმის გამართულად მუშაობის უზრუნველსაყოფად და საბოლოო ჯამში ავტომობილის უსაფრთხო მოძრაობისთვის.`,
  `შპს "საჭე" აწარმოებს ყველა სახის საჭის მექანიზმის (მექანიკური, ჰიდრავლიკური, ელექტრო) მუშაობის დიაგნოსტიკას, უწესივრობის დადგენას, ამ უწესივრობის აღმოფხვრას (მოხსნა დაყენება, დევექტური ნაწილების აღდგენა, ახლით ან მეორადით შეცვლა) და მინიმუმ 6 თვიანი გარანტიის მიცემას.`,
];

// Paragraph animation variants
const paraVariants = {
  initial: { opacity: 0, y: 32, scale: 0.98, skewY: 2 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    skewY: 0,
    transition: { type: "spring", stiffness: 160, damping: 20 },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.96,
    skewY: -2,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

export default function Chvensshesaxeb({ showHeader = true }) {
  const [index, setIndex] = useState(0);

  const nextParagraph = () => {
    setIndex((prev) => (prev + 1) % paragraphs.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="relative w-full flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: "url('/carpic.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0.7 }}
        whileInView={{ opacity: 0.85 }}
        transition={{ duration: 1.2, delay: 0.15 }}
        className="absolute inset-0 z-0 backdrop-blur-md bg-black/50"
      />

      {showHeader && (
        <div className="fixed top-0 w-full z-30">
          <Header />
        </div>
      )}

      <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center w-full px-4 max-w-3xl text-white text-center">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold mb-6 drop-shadow-xl"
          initial={{ opacity: 0, scale: 0.9, y: -34, skewY: 5 }}
          whileInView={{ opacity: 1, scale: 1, y: 0, skewY: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
        >
          შპს საჭე
        </motion.h1>

        <div className="min-h-[180px] flex items-center justify-center mb-8 w-full">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              variants={paraVariants}
              initial="initial"
              whileInView="animate"
              exit="exit"
              className="text-base sm:text-lg leading-relaxed px-5 py-4 rounded-3xl bg-gray-800/50 backdrop-blur-lg shadow-xl border border-gray-700"
            >
              {paragraphs[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.button
          onClick={nextParagraph}
          whileHover={{
            scale: 1.06,
            boxShadow: "0 2px 16px 0 rgba(47,130,255,0.16)",
            backgroundColor: "#1d3354",
          }}
          whileTap={{ scale: 0.96 }}
          className="mt-2 px-7 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-xl shadow-lg transition-all duration-200 font-bold focus:outline-none focus:ring-2 focus:ring-blue-400"
          tabIndex={0}
        >
          შემდეგი ({(index + 1)})
        </motion.button>
      </section>
    </motion.div>
  );
}
