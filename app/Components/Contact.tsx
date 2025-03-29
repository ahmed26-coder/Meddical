import React from 'react'
import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";

export default function Contact() {
  return (
    <>
        <div className="text-center py-[4%]">
            <p className="text-Secondary font-medium">Better information, Better health</p>
            <h2 className="text-Primary text-3xl font-title">News</h2>
        </div> 
        <div className=" px-[8%] grid grid-cols-4 gap-10 pb-[4%]">
            <div className=" bg-Accent p-5 text-Primary hover:text-Accent hover:bg-Primary rounded-md space-y-3">
                <LuPhoneCall className=" text-4xl" />
                <h2 className=" text-lg font-medium">Emergency</h2>
                <p>(237) 681-812-255</p>
                <p>(237) 666-331-894</p>
            </div>
            <div className=" bg-Accent p-5 text-Primary hover:text-Accent hover:bg-Primary rounded-md space-y-3">
                <IoLocationOutline className=" text-4xl" />
                <h2 className=" text-lg font-medium">Location</h2>
                <p>0123 Some place</p>
                <p>9876 Some country</p>
            </div>
            <div className=" bg-Accent p-5 text-Primary hover:text-Accent hover:bg-Primary rounded-md space-y-3">
                <MdOutlineMailOutline className=" text-4xl" />
                <h2 className=" text-lg font-medium">Email</h2>
                <p>fildineeesoe@gmil.com</p>
                <p>myebstudios@gmail.com</p>
            </div>
            <div className=" bg-Accent p-5 text-Primary hover:text-Accent hover:bg-Primary rounded-md space-y-3">
                <MdAccessTime className=" text-4xl" />
                <h2 className=" text-lg font-medium">Working Hours</h2>
                <p>Mon-Sat 09:00-20:00</p>
                <p>Sunday Emergency only</p>
            </div>
        </div>
    </>
  )
}
