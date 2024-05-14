"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowRoundForward } from "react-icons/io";
import LightMode from "./LightMode";
import ExpandableMenu from "./ExpandableMenu";

const MobileMenu = ({ data }: { data: any }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex items-center gap-4 text-neutralGrey lg:hidden overflow-hidden">
      <LightMode />
      <GiHamburgerMenu
        className="text-3xl cursor-pointer hover:scale-125 duration-500"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div
          onClick={() => setOpen(!open)}
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"
        ></div>
      )}
      <div
        className={`fixed p-10 pt-32 top-0 bg-gray-700 z-50 w-[50vw] h-screen transition-all duration-500 ${
          open ? "right-0" : "-right-[50vw]"
        } `}
      >
        <IoMdArrowRoundForward
          onClick={() => setOpen(!open)}
          className="absolute top-8 right-8 text-2xl cursor-pointer hover:scale-125 duration-500"
        />
        <div>
          <ul className="inline-flex flex-col gap-3 text-xl">
            {data.map((item: any, index: number) =>
              item.subMenuItem ? (
                <ExpandableMenu
                  key={index}
                  data={item}
                  lineColor="violet-400"
                  mobileView={true}
                />
              ) : (
                <li
                  className=" max-w-fit py-2 hover:border-b-4 border-violet-400 transition-all duration-100 ease-in-out"
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
