import React from "react";
import Logo from "../assets/img/logo.png";

export default function NavBar() {
  return (
    <>
      <nav className="container px-12 mx-auto lg:px-32">
        <div className="md:flex md:justify-between pt-4">
          <div className="flex items-center gap-5">
            <img src={Logo} alt="" />
            <h1 className="text-gray-500 text-2xl">Lorem</h1>
          </div>
          <ul className="hidden md:flex items-center gap-5">
            <li className="text-gray-500 text-lg">Home</li>
            <li className="text-gray-500 text-lg">Services</li>
            <li className="text-gray-500 text-lg">Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
