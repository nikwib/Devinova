"use client";
import LightMode from "./LightMode";
import ExpandableMenu from "./ExpandableMenu";

const NavBar = ({ data }: { data: any }) => {
  return (
    <div className="lg:block hidden">
      <ul className="flex gap-5 items-center text-neutralGrey">
        {data.map((item: any, index: number) => (
          <li
            className={`${
              !item.subMenuItem &&
              "hover:border-b-4 pb-1 transition-all duration-100 ease-in-out"
            } border-violet-400`}
            key={index}
          >
            {item.subMenuItem ? (
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
