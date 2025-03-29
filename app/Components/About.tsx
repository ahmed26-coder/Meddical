import React from 'react'
import { IoMdQuote } from "react-icons/io";

export default function About() {
    return (
        <div className="ff">
            <div className=" h-[50vh] pt-[5%] items-center space-y-4 text-white text-center">
                <IoMdQuote className=" text-7xl mx-auto" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Quisque placerat scelerisque tortor ornare ornare. Quisque<br /> placerat scelerisque felis vitae tortor augue. Velit nascetur<br /> Consequat faucibus porttitor enim et.</p>
                <div className=" border-1 border-white w-[15%] mx-auto "></div>
                <p className=" text-xl">John Doe</p>
            </div>
        </div>
    )
}
