/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import Company from "../assets/img/company.png";
import Ig from "../assets/img/ig.png";
import In from "../assets/img/in.png";
import Connect from "../assets/img/connect.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section className="mt-12 lg:mt-28 lg:pb-10" id="Home">
      <div className="container px-12 mx-auto pb-10 lg:px-32">
        <div className="lg:flex lg:gap-10">
          <div className="md:w-10/12 md:flex md:mx-auto lg:w-9/12">
            <img src={Company} alt="company" className="w-full" />
          </div>
          <div className="flex flex-col mt-5 gap-5 md:gap-10 md:w-6/12">
            <h1 className="text-3xl text-gray-500">Lorem Ipsum </h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nihil
              exercitationem, alias officia ipsam eligendi dignissimos
              doloremque tenetur culpa{" "}
            </p>
            <div className="flex justify-between md:justify-start lg:gap-10">
              <div className="flex flex-col justify-center text-center items-center w-5/12 lg:w-3/12">
                <h2 className="text-3xl text-gray-500">13+</h2>
                <p className="text-lg text-gray-400">Completed Project</p>
              </div>
              <div className="flex flex-col justify-center text-center items-center w-5/12 lg:w-3/12">
                <h2 className="text-3xl text-gray-500">02</h2>
                <p className="text-lg text-gray-400">Years Experience</p>
              </div>
            </div>
            <div className="flex gap-7">
              <a href="#" data-aos="fade-up">
                <img src={Ig} alt="" />
              </a>
              <a href="#">
                <img src={In} alt="" data-aos="fade-up" />
              </a>
            </div>
          </div>
        </div>
        <button className="mt-10 w-7/12 py-3 bg-blue-700 text-white rounded-md flex justify-between px-5 md:w-52">
          Let's Connect
          <img src={Connect} alt="" />
        </button>
      </div>
    </section>
  );
}
