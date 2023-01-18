import React, { useEffect } from "react";
import CardLight from "./CardLight";
import CardBlue from "./CardBlue";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="Services" className="myBG">
      <div className="container px-12 mx-auto py-10">
        <h1 className="services py-10" data-aos="fade-up">
          Services
        </h1>
        {/* grid  */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-14 mt-5">
            <CardLight />
            <CardBlue />
            <CardLight />
            <CardBlue />
            <CardLight />
            <CardBlue />
          </div>
        </div>
      </div>
    </section>
  );
}
