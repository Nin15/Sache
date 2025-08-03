import React from "react";
import Header from "../components/Header";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import "../App.css";

const services = [
  "საჭის მექანიზმის მუშაობის დიაგნოსტიკა და უწესივრობების დადგენა",
  "საჭის მექანიზმის მოხსნა ავტომობილიდან, დაშლა და დეფექტური დეტალების და დაზიანებული ნაწილების დადგენა",
  "კლიენტებთან შეთანხმებით დაზიანებული ნაწილების ახლით (მეორადით) შეცვლა ან აღდგენა",
  "ადგილზე მექანიკურ საამქროში ხდება საჭის კოლონკის ან ღერძის აღდგენა (გასწორენა, გახეხვა, ე.წ 'შლიფოვკა', საჭირო სალნიკებისა და რგოლების გაჩარხვა)",
  "საჭის მექანიზმის აწყობა და ავტომობილზე მიყენება",
  "საჭის მექანიზმის მუშაობის ხელახალი დიაგნოსტიკა",
  "ავტომობილის კლიენტისთვის ჩაბარება და საჭის მექანიზმის უსაფრთხო მუშაობის 6-თვიანი გარანტიის მიცემა",
];
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -40, skewY: 3 },
  show: {
    opacity: 1,
    x: 0,
    skewY: 0,
    transition: {
      type: "spring",
      stiffness: 480,
      damping: 28,
    },
  },
  exit: { opacity: 0, x: 40, skewY: -3 },
};
export default function Services({ showHeader = true }) {
  return (
    <div className="bg-[#121212] min-h-screen text-white">
      {showHeader && (
        <div className="fixed top-0 w-full z-30">
          <Header />
        </div>
      )}
      <div className="relative w-full gap-2 flex flex-col items-center justify-center">
        <div className="max-w-4xl mt-20 mx-auto px-4 py-12">

          <motion.h1
            initial={{ opacity: 0, y: 32, skewY: 5 }}
            whileInView={{ opacity: 1, y: 0, skewY: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-10"
          >
            ჩვენი სერვისები
          </motion.h1>

          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <AnimatePresence>
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  variants={item}
                  exit="exit"
                  whileHover={{
                    scale: 1.03,
                    y: -4,
                    boxShadow:
                      "0 8px 24px 0 rgba(44, 190, 123, 0.10), 0 2px 4px 0 rgba(36, 37, 42, 0.2)",
                    backgroundColor: "#212b21",
                    borderColor: "#22c55e",
                  }}
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  className="bg-[#1c1c1c] border border-gray-700 p-5 rounded-xl shadow-md flex items-start gap-3 transition-all duration-200"
                >
                  <CheckCircle className="text-green-500 mt-1 shrink-0" size={22} />
                  <p className="leading-relaxed text-gray-200">{service}</p>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.9 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-block px-6 py-2 rounded-full bg-green-600 text-white text-sm font-semibold shadow-lg animate-pulse">
              🔒 ყველა მომსახურებაზე 6-თვიანი გარანტია
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
