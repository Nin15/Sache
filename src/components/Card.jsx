import React from "react";

export default function Card({ name, position, description, image }) {
  return (
    <div
      className={`bg-white flex relative justify-around items-center flex-col  opacity-80 shadow-lg w-[310px] h-[320px] rounded-4xl p-5 transform transition duration-300 hover:scale-105 hover:opacity-100 ${
        position === "დირექტორის მოადგილე" ? "mt-41 md:mt-0" : ""
      }`}
    >
      <img className="absolute w-[200px]  rounded-full top-[-130px]" src="/Logo.png" alt="Logo" />
      <section className="flex flex-col absolute top-25 items-center justify-center ">
        <h2
          className={
            position === "დირექტორი"
              ? `text-red-800 text-xl text-center font-bold mb-3`
              : position === "დირექტორის მოადგილე"
              ? "text-yellow-600 text-xl font-bold mb-3"
              : "text-xl text-blue-800 font-bold mb-3"
          }
        >
          {position}
        </h2>
        <h2 className="font-bold mb text-center">{name}</h2>{" "}
      </section>
      <p className="text-gray-700 text-center absolute top-50">{description}</p>
    </div>
  );
}
