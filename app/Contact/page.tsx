import React from 'react'
import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import News from '../Components/News';

export default function page() {
  return (
    <>
      <div className="jj ">
        <h1 className=" pl-[10%] py-[8%] text-Primary font-title text-4xl font-medium">Our Contacts</h1>
      </div>

      <div className="flex justify-center items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086164!2d144.96305791531664!3d-37.8136119797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5779b95d7f8a0b!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1636109334557!5m2!1sen!2sus"
          width="1200"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className=" py-[4%]"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className=" flex gap-20 mx-auto justify-center items-center px-[8%]">
        <div className="">
          <p className=" text-Secondary font-medium">Get in touch</p>
          <h1 className=" text-Primary font-medium font-title text-3xl">Contact</h1>
          <form action="" className=" flex-col space-y-3 mt-4 bg-Primary text-white p-4">
            <div className=" flex gap-5">
              <input type="text" placeholder='Name' className=" py-2 pl-4 w-full outline-0 border-2 border-Primary focus:border-Secondary rounded-md" />
              <input type="email" placeholder='Email' className=" py-2 pl-4 w-full outline-0 border-2 border-Primary focus:border-Secondary rounded-md" />
            </div>
            <input type="text" placeholder='Subject' className=" py-2 pl-4 w-full outline-0 border-2 border-Primary focus:border-Secondary rounded-md" />
            <textarea rows={8} placeholder='Message' className=" py-1 pl-4 w-full outline-0 border-2 border-Primary focus:border-Secondary rounded-md"></textarea>
            <button className=" w-full text-Primary bg-Accent text-lg py-2">Submit</button>
          </form>
        </div>
        <div className=" grid grid-cols-2 gap-10">
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
      </div>
      <News />
    </>
  )
}
