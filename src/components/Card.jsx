import React, { useEffect, useState } from "react";
import "../App.css"

export default function Card({ name, position, description, image }) {
  const [isLegacy, setIsLegacy] = useState(false);

  useEffect(() => {
    const match = navigator.userAgent.match(/Chrome\/(\d+)/);
    if (match && parseInt(match[1]) < 80) {
      setIsLegacy(true);
      document.body.classList.add("legacy");
    }
  }, []);

  return (
    <div
      className={`bg-white flex relative justify-around items-center flex-col shadow-lg w-[310px] h-[320px] rounded-xl p-5 ${
        !isLegacy ? "transform transition duration-300 hover:scale-105 hover:opacity-100 opacity-80" : "opacity-100"
      } ${
        position === "დირექტორის მოადგილე" ? "mt-20 md:mt-0" : ""
      }`}
    >
      <section className="flex flex-col absolute top-10 items-center justify-center">
        <h2
          className={
            position === "დირექტორი"
              ? "text-red-800 text-xl text-center font-bold mb-3"
              : position === "დირექტორის მოადგილე"
              ? "text-yellow-600 text-xl font-bold mb-3"
              : "text-xl text-blue-800 font-bold mb-3"
          }
        >
          {position}
        </h2>
        <h2 className="font-bold mb-1 text-center">{name}</h2>
      </section>
      <p className="text-gray-700 text-center absolute top-[190px] px-2">
        {description}
      </p>
    </div>
  );
}
