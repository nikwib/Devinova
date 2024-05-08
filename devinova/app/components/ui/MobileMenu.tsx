"use client";
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowRoundForward } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

const MobileMenu = ({ data }: { data: any }) => {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);

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
        className={`fixed p-10 pt-32 top-0 bg-gray-700 z-50 w-[40vw] h-screen transition-all duration-500 ${
          open ? "right-0" : "-right-[40vw]"
        } `}
      >
        <IoMdArrowRoundForward
          onClick={() => setOpen(!open)}
          className="absolute top-8 right-8 text-2xl"
        />
        <div>
          <ul className="flex flex-col gap-3 text-xl">
            {data.map((item: any, index: number) =>
              item.subMenu ? (
                <div key={index}>
                  <div className="flex items-center">
                    <p
                      className="hover:border-b-4 border-violet-400 transition-all duration-100 ease-in-out"
                      onClick={() => setSubOpen(!subOpen)}
                    >
                      {item.label}
                    </p>

                    <RiArrowDropDownLine className="text-5xl" />
                  </div>
                  <div
                    className={` grid ${
                      subOpen ? "grid-rows-[1fr]" : " grid-rows-[0fr]"
                    } duration-500`}
                  >
                    <div
                      className={`overflow-hidden dark:text-neutralGrey duration-1000`}
                    >
                      {item.subMenu.map((item: any, index: number) => (
                        <p key={index}>{item.label}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <li
                  className=" hover:border-b-4 border-violet-400 transition-all duration-100 ease-in-out"
                  key={index}
                >
                  {item.label}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
