"use client";
import { useState } from "react";
import { MdNightlight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const menu = [
    {
      label: "Home",
      link: "#",
    },
    { label: "New Nova", link: "#" },
    { label: "Career", link: "#" },
    {
      label: "Services",
      link: "#",
      subMenu: [
        {
          label: "Services1",
          link: "#",
        },
        { label: "Services2", link: "#" },
        { label: "Services3", link: "#" },
      ],
    },
    { label: "About", link: "#" },
    { label: "Contact", link: "#" },
  ];
  return (
    <div className="lg:block hidden">
      <ul className="flex gap-5 items-center text-neutralGrey">
        {menu.map((item, index) => (
          <li
            className={`${
              !item.subMenu &&
              "hover:border-b-4 transition-all duration-100 ease-in-out"
            } border-violet-400`}
            key={index}
          >
            {item.subMenu ? (
              <div className="relative">
                <div className="flex items-center">
                  {item.label}
                  <RiArrowDropDownLine
                    onClick={() => (open ? setOpen(false) : setOpen(true))}
                    className="text-5xl hover:text-violet-400"
                  />
                </div>
                <div
                  onMouseLeave={() => setOpen(false)}
                  className={` ${open ? "block" : "hidden"}  absolute top-10`}
                >
                  {item.subMenu.map((item, index) => (
                    <li key={index}>{item.label}</li>
                  ))}
                </div>
              </div>
            ) : (
              <a href={item.link}>{item.label}</a>
            )}
          </li>
        ))}
        <MdNightlight className="text-violet-400 text-2xl" />
        {/* <MdOutlineLightMode /> */}
      </ul>
    </div>
  );
};

export default NavBar;
