"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { DataDoctors } from "./Constent";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Doctors() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className="text-center py-[4%]">
        <p className="text-Secondary font-medium">Trusted Care</p>
        <h2 className="text-Primary text-3xl font-title">Our Doctors</h2>
      </div>

      <div
        ref={containerRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth justify-center"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {DataDoctors.slice(0, 3).map((item) => (
          <article key={item.id} className="bg-Accent w-[300px] min-w-[300px] rounded-md">
            <div className="">
              <Image className=" w-[100%]" src={item.img} alt="Doctor" width={250} height={250} />
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
    </>
  );
}
