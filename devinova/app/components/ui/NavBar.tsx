"use client";
import LightMode from "./LightMode";
import ExpandableMenu from "./ExpandableMenu";
import { menuItems } from "@/app/utils/interfaces";

const NavBar = ({ data }: { data: menuItems[] }) => {
  return (
    <div className="lg:block hidden">
      <ul className="flex gap-5 items-center text-neutralGrey">
        {data.map((item: menuItems, index: number) => (
          <li
            className={`${
              !item.subMenu &&
              "hover:border-b-4 pb-1 transition-all duration-100 ease-in-out"
            } border-violet-400`}
            key={index}
          >
            {item.subMenu ? (
              <ExpandableMenu
                data={item}
                lineColor="violet-400"
                mobileView={false}
              />
            ) : (
              <a href={item.link}>{item.label}</a>
            )}
          </li>
        ))}
        <LightMode />
      </ul>
    </div>
  );
};

export default NavBar;
