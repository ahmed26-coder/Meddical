"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { DataDoctors } from "../Components/Constent";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import About from "../Components/About";
import News from "../Components/News";
import Contact from "../Components/Contact";

export default function Page() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const secondContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className="dd ">
        <h1 className="pl-[10%] py-[8%] text-Primary font-title text-4xl font-medium">Our Doctors</h1>
      </div>

      <div
        ref={containerRef}
        className="flex gap-5 overflow-x-auto my-[5%] scrollbar-hide scroll-smooth justify-center"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {DataDoctors.slice(0, 3).map((item) => (
          <article key={item.id} className="bg-Accent w-[300px] min-w-[300px] rounded-md">
            <div>
              <Image className="w-[100%]" src={item.img} alt="Doctor" width={250} height={250} />
            </div>
            <div className="p-5 text-center">
              <p className="text-Primary">{item.dish}</p>
              <h1 className="text-xl font-medium text-Primary">{item.title}</h1>
              <div className="flex gap-5 justify-center mt-5">
                <FaLinkedinIn className="w-9 h-9 p-1 text-lg rounded-full bg-Primary text-Accent" />
                <FaFacebookF className="w-9 h-9 p-1 text-lg rounded-full bg-Primary text-Accent" />
                <FaInstagram className="w-9 h-9 p-1 text-lg rounded-full bg-Primary text-Accent" />
              </div>
            </div>
            <button className="bg-Primary text-Accent text-lg font-medium w-full py-1">{item.button}</button>
          </article>
        ))}
      </div>

      <div
        ref={secondContainerRef}
        className="flex gap-5 overflow-x-auto mb-[5%] scrollbar-hide scroll-smooth justify-center"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {DataDoctors.slice(0, 3).map((item) => (
          <article key={item.id} className="bg-Accent w-[300px] min-w-[300px] rounded-md">
            <div>
              <Image className="w-[100%]" src={item.img} alt="Doctor" width={250} height={250} />
            </div>
            <div className="p-5 text-center">
              <p className="text-Primary">{item.dish}</p>
              <h1 className="text-xl font-medium text-Primary">{item.title}</h1>
              <div className="flex gap-5 justify-center mt-5">
                <FaLinkedinIn className="w-9 h-9 p-1 text-lg rounded-full bg-Primary text-Accent" />
                <FaFacebookF className="w-9 h-9 p-1 text-lg rounded-full bg-Primary text-Accent" />
                <FaInstagram className="w-9 h-9 p-1 text-lg rounded-full bg-Primary text-Accent" />
              </div>
            </div>
            <button className="bg-Primary text-Accent text-lg font-medium w-full py-1">{item.button}</button>
          </article>
        ))}
      </div>

      <About />
      <News />
      <Contact />
    </>
  );
}
