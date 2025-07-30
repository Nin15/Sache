import React from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-[#121212] min-h-screen text-white">
      {/* Header */}
      <div className="fixed top-0 w-full z-30">
        <Header />
      </div>

      {/* Main content */}
      <div className="relative w-full flex flex-col items-center justify-center pt-32 px-4 sm:px-6">
        <div className="max-w-3xl w-full mx-auto py-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-10"
          >
            დაგვიკავშირდით
          </motion.h1>

          {/* Contact Info */}
          <div className="space-y-6 text-base md:text-lg text-gray-300">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-start gap-3"
            >
              <MapPin className="text-green-400 mt-1 shrink-0" />
              <p>ქ. თბილისი, ვაშლიჯვარი. მუხრან მაჭავარიანის ქ.1</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-start gap-3"
            >
              <Phone className="text-blue-400 mt-1 shrink-0" />
              <p>ტელ: +995 555 73 73 42</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-start gap-3"
            >
              <Clock className="text-yellow-400 mt-1 shrink-0" />
              <p>
                მუშაობის საათები:
                <br />
                - ორშაბათი-პარასკევი: 9:00 - 19:00 სთ.
                <br />
                - შაბათი: 9:00 - 17:00 სთ.
                <br />- კვირა და სადღესასწაულო დღეები - დასვენება.
              </p>
            </motion.div>
          </div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.225335562528!2d44.747959775252376!3d41.737232274223516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472feca023dc9%3A0xcf0caf36ffc2b0c8!2zMSDhg5vhg6Phg67hg6Dhg5Dhg5wg4YOb4YOQ4YOt4YOQ4YOV4YOQ4YOg4YOY4YOQ4YOc4YOY4YOhIOGDpeGDo-GDqeGDkCwg4YOX4YOR4YOY4YOa4YOY4YOh4YOY!5e0!3m2!1ska!2sge!4v1753888534199!5m2!1ska!2sge"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="mt-10 text-center"
          >
            <a
              href="tel:+995555737342"
              className="inline-block px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold transition"
            >
              📞 დარეკეთ ახლავე
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
