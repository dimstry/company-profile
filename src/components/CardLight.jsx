import React, { useEffect } from "react";
import Icon from "../assets/img/icon.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CardLight() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="w-64 h-44 bg-slate-100"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <div className="flex flex-col justify-center items-center h-full gap-4">
        <img src={Icon} alt="" />
        <p className="text-xl font-medium text-blue-800">Services</p>
      </div>
    </div>
  );
}
