import { FaCalendarDays } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { FaHandHoldingMedical } from "react-icons/fa";
import { GiHeartPlus } from "react-icons/gi";
import { GiMedicalPackAlt } from "react-icons/gi";
import { GiMedicalDrip } from "react-icons/gi";
import { DataServices, DataSpecialties } from "./Components/Constent"
import { FaCircle } from "react-icons/fa6";
import { FaHeartPulse } from "react-icons/fa6";
import Doctors from "./Components/Doctors";
import News from "./Components/News";
import Contact from "./Components/Contact";
export default function page() {
  return (
    <>
      <div className="space-y-4 aa h-[80vh] flex flex-col lg:flex-row items-center lg:pl-[15%] relative">
      <div className="text-center lg:text-left my-auto">
        <p className="text-Secondary font-medium text-lg">Caring for Life</p>
        <h1 className="text-Primary text-4xl lg:text-5xl font-title leading-tight">
          Leading the Way<br />in Medical Excellence
        </h1>
        <button className="bg-Accent mt-6 text-Primary rounded-full py-2 px-5 text-xl font-medium">
          Our Services
        </button>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-20 absolute lg:bottom-10 bottom-5">
        <div className="bg-Primary flex text-white items-center justify-between py-4 px-5 rounded-md text-lg gap-5 w-64">
          <p>Book an Appointment</p>
          <FaCalendarDays className="text-3xl" />
        </div>
        <div className="bg-Accent flex items-center justify-between py-4 px-5 rounded-md text-lg gap-5 w-64">
          <p>Book an Appointment</p>
          <FiUsers className="text-3xl" />
        </div>
        <div className="bg-Secondary flex text-white items-center justify-between py-4 px-5 rounded-md text-lg gap-5 w-64">
          <p>Book an Appointment</p>
          <GiMoneyStack className="text-3xl" />
        </div>
      </div>
    </div>

    <div className="text-center py-[4%] px-4 md:px-10">
        <p className="text-Secondary font-medium">Welcome to Meddical</p>
        <h2 className="text-Primary text-3xl font-title">A Great Place to Receive Care</h2>
        <p className="text-Black text-sm md:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat<br className="hidden md:block" />
          scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur<br className="hidden md:block" />
          proin massa in. Consequat faucibus porttitor enim et.
        </p>
        <button className="text-Secondary flex items-center gap-2 mx-auto mt-4">
          Learn More<FaArrowRight className="text-Black" />
        </button>
    </div>
      <Image className=" mx-auto" src="/img1.jpg" alt="" width={1200} height={350} />

      <div className="text-center py-[4%] px-4 md:px-10">
        <p className="text-Secondary font-medium text-sm md:text-base">Care you can believe in</p>
        <h2 className="text-Primary text-2xl md:text-3xl font-title">Our Services</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[8%] gap-10">
        <div className="border hidden border-Black rounded-lg bg-white shadow-lg p-5 sm:flex flex-col items-center space-y-3 w-[250px]">
          {[
            { icon: <FaHandHoldingMedical className="text-Secondary text-3xl" />, title: "Free Checkup" },
            { icon: <GiHeartPlus className="text-Secondary text-3xl" />, title: "Cardiogram" },
            { icon: <GiMedicalPackAlt className="text-Secondary text-3xl" />, title: "DNA Testing" },
            { icon: <GiMedicalDrip className="text-Secondary text-3xl" />, title: "Blood Bank" },
          ].map((service, index) => (
            <div key={index} className=" w-full py-3 px-5 flex flex-col items-center text-center rounded-md cursor-pointer transition-all duration-300 hover:bg-Primary hover:text-white">
              {service.icon}
              <p className="mt-2">{service.title}</p>
            </div>
          ))}
          <button className=" bg-Primary text-white font-semibold w-full py-2 rounded-md transition-all duration-300 hover:text-Primary hover:bg-white border border-Primary">
            View All
          </button>
        </div>

        <div className="flex-1 space-y-5">
          <h2 className="sm:text-2xl text-lg font-semibold">A passion for putting patients first.</h2>
          <div className="grid grid-cols-2 gap-3">
            {DataServices.map((item) => (
              <article key={item.id} className="flex items-center gap-2 text-lg">
                <FaCircle className="text-Secondary w-3 h-3" />
                <p>{item.title}</p>
              </article>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <Image className="rounded-lg shadow-md" src="/img2.jpg" alt="Medical 1" width={250} height={250} />
          <Image className="rounded-lg shadow-md" src="/img3.jpg" alt="Medical 2" width={250} height={250} />
        </div>
      </div>

      <div className="text-center py-[4%]">
        <p className=" text-Secondary font-medium">Always Caring</p>
        <h2 className=" text-Primary text-3xl font-title">Our Specialties</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 px-[8%] mb-[4%]">
        {DataSpecialties.map((specialty) => (
          <article
            key={specialty.id}
            className="w-full py-6 px-4 mx-auto border border-gray-300 rounded-lg shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:bg-Primary hover:text-white hover:scale-105"
          >
            <FaHeartPulse className="text-Secondary text-4xl mb-2" />
            <p className="font-medium">{specialty.title}</p>
          </article>
        ))}
      </div>

      <div className=" ss h-[100vh] sm:h-[80vh]">
        <div className=" sm:flex justify-center gap-[20%] items-center py-[4%]">
          <div className=" my-auto">
            <h1 className=" text-Secondary font-title text-3xl font-medium">Book an Appointment</h1>
            <p className=" text-Black">Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit. Quisque placerat scelerisque tortor ornare<br /> ornare. Convallis felis vitae tortor augue. Velit<br /> nascetur proin massa in. Consequat faucibus<br /> porttitor enim et.</p>
          </div>
          <form action="" className=" bg-Primary mt-3 sm:mt-0 text-white rounded-md p-3 w-full sm:w-[35%]">
            <div className="grid grid-cols-2 gap-3">
              <input className=" py-2 pl-3 outline-0 focus:border-Secondary border-2 border-Primary rounded-md" type="text" placeholder="Name" />
              <input className=" py-2 pl-3 outline-0 focus:border-Secondary border-2 border-Primary rounded-md" type="text" placeholder="Gender" />
              <input className=" py-2 pl-3 outline-0 focus:border-Secondary border-2 border-Primary rounded-md" type="email" placeholder="Email" />
              <input className=" py-2 pl-3 outline-0 focus:border-Secondary border-2 border-Primary rounded-md" type="phone" placeholder="Phone" />
              <input className=" py-2 pl-3 outline-0 focus:border-Secondary border-2 border-Primary rounded-md" type="data" placeholder="Data" />
              <input className=" py-2 pl-3 outline-0 focus:border-Secondary border-2 border-Primary rounded-md" type="time" placeholder="Time" />
              <input className=" py-2 pl-3 outline-0 focus:border-Secondary border-2 border-Primary rounded-md" type="text" placeholder="Doctor" />
              <input className=" py-2 pl-3 outline-0 focus:border-Secondary border-2 border-Primary rounded-md" type="text" placeholder="Department" />
            </div>
            <textarea className=" w-full py-2 outline-0 focus:border-Secondary border-2 border-Primary rounded-md mt-3 pl-3 " rows={8} placeholder="Message"></textarea>
            <button className=" text-Primary w-full py-1 text-lg bg-Accent">Submit</button>
          </form>
        </div>
      </div>
      <Doctors />
      <News />
      <Contact />
    </>
  );
}
