import React from "react";

export default function Card({ name, position, description, image }) {
  return (
    <div className="bg-white flex relative justify-around items-center flex-col  opacity-80 shadow-lg w-[310px] h-[320px] rounded-4xl p-5 transform transition duration-300 hover:scale-105 hover:opacity-100">
      <img
        className="rounded-full border-2 w-[200px] h-[200px] object-cover absolute top-[-90px] "
        src={"/person.jpg"}
        alt={name}
      />{" "}
      <section className="flex flex-col absolute top-30 items-center justify-center ">
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
      <p className="text-gray-700 text-center absolute top-56">{description}</p>
    </div>
  );
}
