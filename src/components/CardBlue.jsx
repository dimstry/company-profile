import React, { useEffect } from "react";
import Icon2 from "../assets/img/icon2.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CardBlue() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="w-64 h-44 bg-blue-800"
      data-aos="fade-right"
      data-aos-duration="3000"
    >
      <div className="flex flex-col justify-center items-center h-full gap-4">
        <img src={Icon2} alt="" />
        <p className="text-xl font-medium text-slate-50">Services</p>
      </div>
    </div>
  );
}
