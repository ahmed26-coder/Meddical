import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-Primary text-white py-[4%] mt-[4%] px-[8%]">
      <div className="flex flex-wrap justify-between gap-6 text-center md:text-left">
        <ul className="space-y-4 w-full md:w-auto">
          <h1 className="text-4xl text-Accent font-title">Meddical</h1>
          <p>Leading the Way in Medical<br />Execellence, Trusted Care.</p>
        </ul>

        <ul className="space-y-4 w-full md:w-auto">
          <h2 className="text-xl font-bold">Important Links</h2>
          <p className="hover:text-red-500 hover:scale-110 transition-all duration-300">Appointment</p>
          <p className="hover:text-red-500 hover:scale-110 transition-all duration-300">Doctors</p>
          <p className="hover:text-red-500 hover:scale-110 transition-all duration-300">Services</p>
          <p className="hover:text-red-500 hover:scale-110 transition-all duration-300">About Us</p>
        </ul>

        <ul className="space-y-4 w-full md:w-auto">
          <h2 className="text-xl font-bold">Contact Us</h2>
          <p>Call: (237) 681-812-255</p>
          <p>Email: fildineesoe@gmail.com</p>
          <p>Address: 0123 Some place</p>
          <p>Some country</p>
        </ul>

        <form action="" className="w-full space-y-5 md:w-auto">
          <h2 className="text-2xl font-bold">Newsletter</h2>
          <label className="flex items-center justify-center md:justify-start gap-2 mt-2">
            <input type="text" placeholder="Enter your email address" className="p-2 rounded-md text-black bg-Accent outline-0 w-full md:w-auto" />
            <FaTelegramPlane className="text-Primary w-10 rounded-md h-10 p-1 text-xl bg-Accent cursor-pointer hover:scale-105 transition-all duration-300" />
          </label>
        </form>
      </div>

      <div className="border-t border-white my-6"></div>

      <div className="flex flex-wrap justify-between items-center text-center gap-6">
        <small className="w-full md:w-auto">&copy;2021 Hospital&#39;s name All Rights Reserved by PNTEC-LTD</small>
        <div className="flex gap-5 justify-center md:justify-start w-full md:w-auto">
          <FaLinkedinIn className="text-2xl text-Primary bg-Accent p-2 rounded-full w-10 h-10 hover:scale-110 transition-all duration-300" />
          <FaFacebookF className="text-2xl text-Primary bg-Accent p-2 rounded-full w-10 h-10 hover:scale-110 transition-all duration-300" />
          <FaInstagram className="text-2xl text-Primary bg-Accent p-2 rounded-full w-10 h-10 hover:scale-110 transition-all duration-300" />
        </div>
      </div>
    </div>
  )
}
