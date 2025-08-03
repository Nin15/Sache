import React from "react";
import Header from "../components/Header";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import "../App.css";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -36, skewY: 3 },
  show: {
    opacity: 1,
    x: 0,
    skewY: 0,
    transition: { type: "spring", stiffness: 320, damping: 26 },
  },
  exit: { opacity: 0, x: 36, skewY: -3 },
};

export default function Contact({ showHeader = true }) {
  return (
    <div className="bg-[#121212] min-h-screen text-white">
      {showHeader && (
        <div className="fixed top-0 w-full z-30">
          <Header />
        </div>
      )}

      <div className="relative w-full flex flex-col items-center justify-center pt-32 px-4 sm:px-6">
        <div className="max-w-3xl w-full mx-auto py-10">
          <motion.h1
            initial={{ opacity: 0, y: 34, skewY: 6 }}
            whileInView={{ opacity: 1, y: 0, skewY: 0 }}
            transition={{ type: "spring", stiffness: 230, damping: 22 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-10"
          >
            დაგვიკავშირდით
          </motion.h1>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6 text-base md:text-lg text-gray-300"
          >
            <AnimatePresence>
              <motion.div
                variants={item}
                exit="exit"
                className="flex items-start gap-3"
              >
                <MapPin className="text-green-400 mt-1 shrink-0" />
                <p>ქ. თბილისი, ვაშლიჯვარი. მუხრან მაჭავარიანის ქ.1</p>
              </motion.div>
              <motion.a
                variants={item}
                exit="exit"
                href="tel:+995555737342"
                className="flex items-start gap-3 group cursor-pointer hover:bg-[#203b42] px-2 py-1 rounded-lg transition"
                tabIndex={0}
                style={{ textDecoration: "none" }}
                whileHover={{
                  scale: 1.025,
                  x: 4,
                  boxShadow: "0 4px 18px 0 rgba(37,120,211,0.09)",
                }}
              >
                <Phone className="text-blue-400 mt-1 shrink-0 group-hover:animate-bounce" />
                <p className="font-bold text-white">ტელ: +995 555 73 73 42</p>
              </motion.a>
              <motion.div
                variants={item}
                exit="exit"
                className="flex items-start gap-3"
              >
                <span className="mt-1 text-yellow-500 font-bold">🌐</span>
                <a
                  href="https://www.sache1.ge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-300 transition"
                >
                  www.sache1.ge
                </a>
              </motion.div>
              <motion.div
                variants={item}
                exit="exit"
                className="flex items-start gap-3"
              >
                <Clock className="text-yellow-400 mt-1 shrink-0" />
                <p>
                  მუშაობის საათები:
                  <br />
                  - ორშაბათი-პარასკევი: 9:00 - 19:00 სთ.
                  <br />
                  - შაბათი: 9:00 - 17:00 სთ.
                  <br />- კვირა და სადღესასწაულო დღეები: დასვენება.
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.88, rotate: 3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 18,
              delay: 0.8,
            }}
            viewport={{ once: true }}
            className="mt-10 w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2976.417956892042!2d44.759613800000004!3d41.7546457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044730074b94d09%3A0xbe542c60ce8ad852!2sSache%20(gia)!5e0!3m2!1sen!2sge!4v1754077218438!5m2!1sen!2sge"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 340,
              damping: 16,
              delay: 1.05,
            }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <a
              href="tel:+995555737342"
              className="inline-block px-7 py-3 rounded-full bg-blue-500 hover:bg-blue-600 shadow-xl text-white text-sm font-bold tracking-wide transition transform hover:scale-105 focus:scale-105 active:scale-95"
              tabIndex={0}
            >
              📞 დარეკეთ ახლავე
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
