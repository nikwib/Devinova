"use client";
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowRoundForward } from "react-icons/io";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative text-neutralGrey lg:hidden overflow-hidden">
      <GiHamburgerMenu onClick={() => setOpen(!open)} />
      {open && (
        <div
          onClick={() => setOpen(!open)}
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"
        ></div>
      )}
      <div
        className={`fixed top-0 bg-gray-700 z-50 w-[40vw] h-screen transition-all duration-500 ${
          open ? "right-0" : "-right-[40vw]"
        } `}
      >
        <IoMdArrowRoundForward
          onClick={() => setOpen(!open)}
          className="absolute top-8 right-8 text-2xl"
        />
      </div>
    </div>
  );
};

export default MobileMenu;
