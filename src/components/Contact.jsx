import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <section id="Contact" className="myBG">
      <div className="container mx-auto px-12 py-16">
        <div className="md:w-5/12 lg:w-4/12 md:mx-auto">
          <h2 className="text-center text-2xl" data-aos="fade-up">
            What can us do for you?
          </h2>
          <p
            className="text-center mt-2"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            We are ready to work on a project of any complexity,whether it’s
            commercial or residential.
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <input
              type="text"
              placeholder="First Name"
              className="w-64 h-10 rounded-md placeholder:pl-4"
              data-aos="fade-up"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-64 h-10 rounded-md placeholder:pl-4"
              data-aos="fade-up"
              data-aos-duration="2500"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-64 h-10 rounded-md placeholder:pl-4"
              data-aos="fade-up"
              data-aos-duration="3000"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-64 h-10 rounded-md placeholder:pl-4"
              data-aos="fade-up"
              data-aos-duration="3500"
            />
            <textarea
              placeholder="Message"
              className="w-64 h-32 rounded-md placeholder:pl-4 md:col-span-2 md:w-full"
              data-aos="fade-up"
              data-aos-duration="4000"
            />
            <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
