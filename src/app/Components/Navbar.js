"use client";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-[#2C2C2C] flex flex-row justify-center text-white py-10 px-6 z-50">
      <h1 className="text-xl font-bold px-5 hover:bg-white hover:text-black hover:px-2 hover:rounded-sm transition">
        Contact
      </h1>
      <h1 className="text-xl font-bold px-5 hover:bg-white hover:text-black hover:px-2 hover:rounded-sm transition">
        Home
      </h1>
      <h1 className="text-xl font-bold px-5 hover:bg-white hover:text-black hover:px-2 hover:rounded-sm transition">
        Experiences
      </h1>
    </div>
  );
};

export default Navbar;
