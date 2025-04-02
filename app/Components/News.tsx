import React from 'react'
import Image from "next/image";
import { DataNews } from "./Constent"
import { FaRegEye } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

export default function News() {
  return (
    <>
        <div className="text-center py-[4%]">
            <p className="text-Secondary font-medium">Better information, Better health</p>
            <h2 className="text-Primary text-3xl font-title">News</h2>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 px-[10%] gap-5 sm:gap-10">
            {DataNews.map((item) => (
                <article key={item.id} className=" flex gap-3 items-center">
                    <div className="">
                        <Image src={item.img} alt="Doctor" width={200} height={200} />
                    </div>
                    <div className=" p-3 space-y-3">
                        <small className=" text-Secondary font-medium">{item.dish}</small>
                        <h2 className=" text-xl font-medium">{item.title}</h2>
                        <div className=" flex gap-10">
                            <p className=" flex items-center gap-1"><FaRegEye className=" text-xl text-blue-700" />{item.number1}</p>
                            <p className=" flex items-center gap-1"><CiHeart className=" text-xl text-red-500" />{item.number2}</p>
                        </div>
                    </div>
                </article>
            ))}
        </div>

    </>
  )
}
