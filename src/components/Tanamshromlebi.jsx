import React from "react";
import Header from "./Header";
import Card from "./Card";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
      ease: "easeOut",
    },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Tanamshromlebi() {
  const workers = [
    {
      name: "გრიგოლ მაღრაძე (გია)",
      description: "20+ წლიანი გამოცდილება.",
      image: "/images/worker1.jpg",
      position: "დირექტორი",
    },
    {
      name: "მამუკა კაპანაძე",
      description:
        "15+ წლიანი გამოცდილება. აწყობილი აქვს 3000-ზე მეტი საჭის მექანიზმი.",
      image: "/images/worker2.jpg",
      position: "დირექტორის მოადგილე",
    },
    {
      name: "გოგი ჩხარტიშვილი (გოგიტა)",
      description: "10+ წლიანი გამოცდილება",
      image: "/images/worker5.jpg",
      position: "ხელოსანი",
    },
    {
      name: "ალექსანდრე გოგოლაშვილი (ალეკო)",
      description: "8+ წლიანი გამოცდილება.",
      image: "/images/worker10.jpg",
      position: "ხარატი",
    },
    {
      name: "ირაკლი ჩინჩალაძე ",
      description: "6+ წლიანი გამოცდილება.",
      image: "/images/worker9.jpg",
      position: "ხარატი",
    },
    {
      name: "გაგა სამხარაძე",
      description: "5+ წლიანი გამოცდილება.",
      image: "/images/worker6.jpg",
      position: "ხელოსანი",
    },
    {
      name: "თემურ მაღრაძე",
      description: "4+ წლიანი გამოცდილება.",
      image: "/images/worker8.jpg",
      position: "ხელოსანი",
    },
    {
      name: "ზაზა უერთაშვილი",
      description: "3+ წლიანი გამოცდილება.",
      image: "/images/worker7.jpg",
      position: "ხელოსანი",
    },
    {
      name: "რამაც კელენჯერიძე (რეზო)",
      image: "/images/worker3.jpg",
      position: "მენეჯერი",
    },
    {
      name: "დავით ნებიერიძე",
      image: "/images/worker4.jpg",
      position: "მენეჯერი",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      variants={containerVariants}
      className="w-full bg-black flex flex-col items-center justify-start min-h-screen"
    >
      <section className="fixed top-0 z-30 w-full">
        <Header />
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-32 text-center mb-10 px-4"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400">
          ჩვენი გუნდი
        </h1>
        <p className="text-gray-400 mt-2 text-sm sm:text-base flex justify-center items-center gap-2">
          პროფესიონალები, რომლებსაც შეგიძლიათ ენდოთ{" "}
          <Sparkles className="text-yellow-400" size={18} />
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 pb-10 mt-20 flex flex-wrap justify-center gap-21"
      >
        {workers.map((worker, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Card
              name={worker.name}
              description={worker.description}
              image={worker.image}
              position={worker.position}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
