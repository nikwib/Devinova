"use client";
import { useState } from "react";
import { MdNightlight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavBar = ({ data }: { data: any }) => {
  const [open, setOpen] = useState("");
  const [hoverd, setHoverd] = useState("");

  return (
    <div className="lg:block hidden">
      <ul className="flex gap-5 items-center text-neutralGrey">
        {data.map((item: any, index: number) => (
          <li
            className={`${
              !item.subMenu &&
              "hover:border-b-4 transition-all duration-100 ease-in-out"
            } border-violet-400`}
            key={index}
          >
            {item.subMenu ? (
              <div
                onMouseEnter={() => setHoverd(item.label)}
                onMouseLeave={() => setHoverd("")}
                onClick={() =>
                  open == item.label ? setOpen("") : setOpen(item.label)
                }
                className="relative "
              >
                <div className="flex items-center cursor-pointer">
                  <p
                    className={`${
                      hoverd == item.label
                        ? "border-b-4 transition-all duration-100 ease-in-out border-violet-400"
                        : ""
                    }`}
                  >
                    {item.label}
                  </p>
                  <RiArrowDropDownLine className="text-5xl" />
                </div>
                <div
                  onMouseLeave={() => setOpen("")}
                  className={` ${
                    open ? "flex" : "hidden"
                  }  absolute top-10 -left-3 flex-col gap-2 bg-gray-700 p-3 bg-opacity-50`}
                >
                  {item.subMenu.map((item: any, index: number) => (
                    <a
                      className="hover:border-b-4 border-violet-400 transition-all duration-100 ease-in-out"
                      key={index}
                      href={item.link}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a href={item.link}>{item.label}</a>
            )}
          </li>
        ))}
        <MdNightlight className="text-violet-400 text-2xl cursor-pointer hover:text-neutralGrey" />
        {/* <MdOutlineLightMode /> */}
      </ul>
    </div>
  );
};

export default NavBar;
