import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
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

export default function Services() {
  const [isLegacy, setIsLegacy] = useState(false);

  useEffect(() => {
    const match = navigator.userAgent.match(/Chrome\/(\d+)/);
    if (match && parseInt(match[1], 10) <= 109) {
      setIsLegacy(true);
      document.body.classList.add("legacy");
    }
  }, []);

  const Wrapper = isLegacy ? React.Fragment : motion;

  return (
    <div className="bg-[#121212] min-h-screen text-white">
      <Header />
      <div className="relative w-full gap-2 flex flex-col items-center justify-center">
        <div className="max-w-4xl mt-20 mx-auto px-4 py-12">
          <Wrapper.h1
            {...(!isLegacy && {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
            })}
            className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-10"
          >
            ჩვენი სერვისები
          </Wrapper.h1>

          <div className="space-y-6">
            {services.map((service, index) => {
              const MotionOrDiv = isLegacy ? "div" : motion.div;
              return (
                <MotionOrDiv
                  key={index}
                  {...(!isLegacy && {
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: index * 0.1, duration: 0.5 },
                    whileHover: {
                      scale: 1.02,
                      backgroundColor: "#1e1e1e",
                    },
                  })}
                  className="bg-[#1c1c1c] border border-gray-700 p-5 rounded-xl shadow-md flex items-start gap-3 transition-all duration-300"
                >
                  <CheckCircle className="text-green-500 mt-1" size={22} />
                  <p className="leading-relaxed text-gray-200">{service}</p>
                </MotionOrDiv>
              );
            })}
          </div>

          <Wrapper.div
            {...(!isLegacy && {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.5, delay: 1.5 },
            })}
            className="mt-12 text-center"
          >
            <div className="inline-block px-6 py-2 rounded-full bg-green-600 text-white text-sm font-semibold shadow-lg animate-pulse">
              🔒 ყველა მომსახურებაზე 6-თვიანი გარანტია
            </div>
          </Wrapper.div>
        </div>
      </div>
    </div>
  );
}
