import React from 'react'
import { MdHealing } from "react-icons/md";
import { DataService } from "../Components/Constent"
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import Link from 'next/link';
import Contact from '../Components/Contact';
export default function page() {
  return (
    <>
      <div className="gg ">
        <h1 className=" pl-[10%] py-[8%] text-Primary font-title text-4xl font-medium">About us</h1>
      </div>

      <div className=" grid grid-cols-3 px-[8%] gap-15 py-[4%]">
        {DataService.map((item) => (
          <article key={item.id} className=" w-fit relative">
            <div className="">
              <Image className=" w-[100%]" src={item.img} alt="" width={350} height={370} />
            </div>
            <div className=" p-4">
              <h2 className=" text-2xl font-medium text-Primary">{item.title}</h2>
              <p>{item.dish}</p>
              <Link href="/Single"><button className=" text-Secondary flex items-center gap-2">{item.button}<FaArrowRight /></button></Link>
            </div>
            <MdHealing className=" absolute right-4 bottom-1/5 -translate-y-1/5 w-14 h-14 rounded-full p-2 bg-Primary text-white" />
          </article>
        ))}
      </div>
      <Contact />
    </>
  )
}
