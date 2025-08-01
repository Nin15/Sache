import React, { useEffect, useState } from "react";
import Header from "./Header";
import { motion } from "framer-motion";

const paragraphs = [
  `შპს "საჭე" საქართველოში ავტოსერვისის სფეროში მოქმედი ლიდერი კომპანიაა, რომელიც საქმიანობას ეწევა 2011 წლიდან, ხოლო ამ კომპანიაში მოღვაწე მუშაკებისა და ავტოხელოსნების პროფესიონალიზმი წლების განმავლობაში მათ მიერ შეკეთებული ავტომობილების ხარისხითა და მადლიერი კლიენტების გამოხმაურებებითაა დადასტურებული.`,
  `შპს "საჭე" დასპეცილიზებულია საჭის მართვის მექანიზმის გამართულად მუშაობის უზრუნველსაყოფად და საბოლოო ჯამში ავტომობილის უსაფრთხო მოძრაობისთვის.`,
  `შპს "საჭე" აწარმოებს ყველა სახის საჭის მექანიზმის (მექანიკური, ჰიდრავლიკური, ელექტრო) მუშაობო დიაგნოსტიკას, უწესივრობის დადგენას, ამ უწესივრობის აღმოფხვრას (მოხსნა დაყენება, დევექტური ნაწილების აღდგენა, ახლით ან მეორადით შეცვლა) და მინიმუმ 6 თვიანი გარანტიის მიცემას.`,
];

export default function Chvensshesaxeb() {
  const [index, setIndex] = useState(0);
  const [isLegacy, setIsLegacy] = useState(false);

  useEffect(() => {
    const match = navigator.userAgent.match(/Chrome\/(\d+)/);
    if (match && parseInt(match[1], 10) <= 109) {
      setIsLegacy(true);
      document.body.classList.add("legacy");
    }
  }, []);

  const nextParagraph = () => {
    setIndex((prev) => (prev + 1) % paragraphs.length);
  };

  const MainWrapper = isLegacy ? "div" : motion.div;
  const ParagraphWrapper = isLegacy ? "p" : motion.p;
  const Title = isLegacy ? "h1" : motion.h1;

  return (
    <MainWrapper
      {...(!isLegacy && {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.6 },
      })}
      className="relative w-full flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: "url('/carpic.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 z-0 backdrop-blur-md bg-black/40" />

      <section className="fixed top-0 w-full z-30">
        <Header />
      </section>

      <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center w-full px-4 max-w-3xl text-white text-center">
        <Title
          {...(!isLegacy && {
            initial: { opacity: 0, scale: 0.9, y: -30 },
            animate: { opacity: 1, scale: 1, y: 0 },
            transition: { duration: 0.8, ease: "easeOut" },
          })}
          className="text-3xl sm:text-4xl font-bold mb-6 [text-shadow:1px_1px_2px_black,0_0_25px_blue,0_0_5px_darkblue]"
        >
          შპს საჭე
        </Title>

        <div className="min-h-[160px] flex items-center justify-center mb-6 w-full relative">
          {paragraphs.map((text, i) => (
            <ParagraphWrapper
              key={`paragraph-${i}`}
              {...(!isLegacy && {
                initial: { opacity: 0, y: 20 },
                animate: {
                  opacity: i === index ? 1 : 0,
                  y: i === index ? 0 : 20,
                  position: i === index ? "relative" : "absolute",
                },
                transition: { duration: 0.6 },
              })}
              className={`${
                i === index ? "block" : "hidden"
              } text-base sm:text-lg leading-relaxed p-4 rounded-3xl bg-gray-800/40 backdrop-blur-lg`}
            >
              {text}
            </ParagraphWrapper>
          ))}
        </div>

        <button
          onClick={nextParagraph}
          className="mt-4 px-6 py-2 bg-blue-950 hover:bg-blue-900 rounded-xl transition-all duration-300"
        >
          შემდეგი ({index + 1})
        </button>
      </section>
    </MainWrapper>
  );
}
