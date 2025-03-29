'use client'
import React from 'react'
import { useState } from "react";
import { FaHandHoldingMedical } from "react-icons/fa";
import { GiHeartPlus } from "react-icons/gi";
import { GiMedicalPackAlt } from "react-icons/gi";
import { GiMedicalDrip } from "react-icons/gi";
import { FaCircle } from "react-icons/fa6";
import Image from "next/image";
import { DataServices } from "../Components/Constent"
import Doctors from '../Components/Doctors';
import Contact from '../Components/Contact';

export default function Page() {
    const [activeIte, setActiveIte] = useState<string>("Free Checkup");
  return (
    <>
      <div className="hh ">
        <h1 className=" pl-[10%] py-[8%] text-Primary font-title text-4xl font-medium">About us</h1>
      </div>
      <div className=" flex gap-10 px-[8%] py-[4%]">
        <div className="border border-Black rounded-lg w-fit h-fit bg-white shadow-lg p-5 flex flex-col items-center space-y-3">
          {[
            { icon: <FaHandHoldingMedical className="text-Secondary text-3xl" />, title: "Free Checkup" },
            { icon: <GiHeartPlus className="text-Secondary text-3xl" />, title: "Cardiogram" },
            { icon: <GiMedicalPackAlt className="text-Secondary text-3xl" />, title: "DNA Testing" },
            { icon: <GiMedicalDrip className="text-Secondary text-3xl" />, title: "Blood Bank" },
          ].map((service, index) => (
            <div key={index}className={`py-2 ${activeIte === service .title? ' w-full py-3 px-5 flex flex-col items-center text-center rounded-md cursor-pointer transition-all duration-300 bg-Primary text-white text-black ' : 'w-full py-3 px-5 flex flex-col items-center text-center rounded-md cursor-pointer transition-all duration-300 text-black '}`}
            onClick={() => setActiveIte(service.title)}>
              {service.icon}
              <p className="mt-2">{service.title}</p>
            </div>
          ))}
          <button className="bg-Primary text-white font-semibold w-full py-2 rounded-md transition-all duration-300 hover:text-Primary hover:bg-white border border-Primary">
            View All
          </button>
        </div>
        <div className="flex-1 space-y-5">
          <Image className="" src="/img6.jpg" alt="" width={800} height={350} />
          <h2 className="text-2xl font-semibold">A passion for putting patients first.</h2>
          <div className="grid grid-cols-3 gap-3">
            {DataServices.map((item) => (
              <article key={item.id} className="flex items-center gap-2 text-lg">
                <FaCircle className="text-Secondary w-3 h-3" />
                <p>{item.title}</p>
              </article>
            ))}
          </div>
          <p className="text-Black leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor<br /> ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat<br /> faucibus porttitor enim et.
          </p>
          <p className="text-Black leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat<br /> scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.
          </p>
        </div>

      </div>
      <Doctors />
      <Contact />
    </>
  )
}
