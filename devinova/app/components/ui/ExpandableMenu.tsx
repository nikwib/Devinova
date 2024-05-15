import { menuItems, sectionData, subMenuItem } from "@/app/utils/interfaces";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ExpandableMenu = ({
  data,
  lineColor,
  mobileView,
}: {
  data: menuItems;
  lineColor: string;
  mobileView: boolean;
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <section
        onClick={handleOpen}
        className=" flex items-center gap-2 justify-between pb-1"
      >
        <p className={`hover:border-b-4 border-${lineColor} cursor-pointer`}>
          {data.label}
        </p>
        <button className={`text-2xl dark:text-neutralGrey`}>
          {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </section>
      <div
        className={` ${mobileView ? "" : "absolute"} rounded-md grid ${
          open ? "grid-rows-[1fr]" : " grid-rows-[0fr]"
        } duration-500`}
      >
        <div className=" overflow-hidden dark:text-neutralGrey duration-1000">
          {data.subMenu.map((item: subMenuItem, index: number) => (
            <a
              className={`pl-2 pt-1 hover:border-b-4 flex items-center justify-between border-${lineColor}`}
              key={index}
              href={item.link}
            >
              <p>{item.label}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpandableMenu;
