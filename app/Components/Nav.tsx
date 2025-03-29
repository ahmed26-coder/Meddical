'use client'
import { JSX, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdAccessTime } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import { IoLocationOutline, IoClose } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { DataNav } from "./Constent"
import Link from "next/link";

export default function Nav(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string>("Home");

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between px-[8%] py-3 lg:flex-row flex-col">
        <h1 className="font-title text-Primary text-4xl hidden lg:block">Med<span className="text-Secondary">dical</span></h1>
        
        <div className="hidden lg:flex gap-10 items-center">
          <div className="flex gap-2 items-center">
            <FiPhoneCall className="text-3xl text-Primary" />
            <label>
              <p className="text-Primary font-bold text-lg">Emergency</p>
              <small className="text-Secondary font-medium">(237) 681-812-255</small>
            </label>
          </div>

          <div className="flex gap-2 items-center">
            <MdAccessTime className="text-3xl text-Primary" />
            <label>
              <p className="text-Primary font-bold text-lg">Work Hour</p>
              <small className="text-Secondary font-medium">09:00 - 20:00 Everyday</small>
            </label>
          </div>

          <div className="flex gap-2 items-center">
            <IoLocationOutline className="text-3xl text-Primary" />
            <label>
              <p className="text-Primary font-bold text-lg">Location</p>
              <small className="text-Secondary font-medium">0123 Some Place</small>
            </label>
          </div>
        </div>
      </div>

      <div className="bg-Primary flex justify-between items-center px-[8%] py-3">
        <h1 className="font-title text-white text-3xl lg:hidden">Med<span className="text-Accent">dical</span></h1>
        <div className="lg:hidden flex items-center gap-4">
          <IoMdSearch className="text-white text-3xl" />
          <button className="text-white text-3xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <IoClose /> : <CiMenuFries />}
          </button>
        </div>

        <ul className={`lg:flex gap-8 text-lg text-white ${isMenuOpen ? 'flex flex-col absolute bg-Primary w-full left-0 top-21 py-5 px-[8%]' : 'hidden'}`}>
          {DataNav.map((item) => (
            <li 
              key={item.id} 
              className={`py-2 ${activeItem === item .title? 'text-Accent' : ''}`}
              onClick={() => setActiveItem(item.title)}
            ><Link href={item.link}>
              {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex gap-8 items-center">
          <IoMdSearch className="text-white text-3xl" />
          <button className="bg-Accent text-Primary rounded-full py-1 px-5 text-lg">Appointment</button>
        </div>
      </div>
    </div>
  );
}
