import React from 'react'
import Image from "next/image";
import { DataServices } from '../Components/Constent';
import { FaCircle } from "react-icons/fa6";
import Doctors from '../Components/Doctors';
import News from '../Components/News';
import Contact from '../Components/Contact';
import About from '../Components/About';

export default function page() {
    return (
        <>
            <div className="dd ">
                <h1 className=" pl-[10%] py-[8%] text-Primary font-title text-4xl font-medium">About us</h1>
            </div>
            <div className=" sm:flex space-y-5 sm:space-y-0 gap-10 px-[15%] py-[4%]">
                <Image className="" src="/img4.jpg" alt="" width={350} height={370} />
                <div className="flex-1">
                    <p className=" text-Secondary font-medium">Welcome to Hospital name</p>
                    <h2 className=" text-2xl sm:text-4xl font-title text-Primary font-semibold">Best Care for Your< br />Good Health</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {DataServices.map((item) => (
                            <article key={item.id} className="flex items-center gap-2 text-lg">
                                <FaCircle className="text-Secondary w-3 h-3" />
                                <p>{item.title}</p>
                            </article>
                        ))}
                    </div>
                    <p className="text-Black leading-relaxed py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque<br /> placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque<br /> tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur<br /> proin massa in. Consequat faucibus porttitor enim et.
                    </p>
                    <p className="text-Black leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque<br /> placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur<br /> proin massa in.
                    </p>
                </div>
            </div>
            <About />
            <Doctors />
            <News />
            <Contact />
        </>
    )
}
