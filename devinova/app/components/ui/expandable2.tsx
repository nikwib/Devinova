"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Expandable2 = ({ data, textColor }: { data: any; textColor: string }) => {
  const [open, setOpen] = useState(false);
  console.log("wiiii", data.title);
  console.log(data);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <article className="pb-5 w-full p-5">
      <section className="border-b-[1px] pb-1 pl-5 flex items-center justify-between dark:border-white">
        <h3
          className={`text-3xl ${
            textColor ? textColor : "dark:text-neutralGrey"
          }`}
        >
          {data.title || data.label}
        </h3>
        <button
          className={`text-2xl dark:text-neutralGrey`}
          onClick={handleOpen}
        >
          {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </section>
      <div
        className={`rounded-md grid ${
          open ? "grid-rows-[1fr]" : " grid-rows-[0fr]"
        } duration-500`}
      >
        <div
          className={`overflow-hidden dark:text-neutralGrey ${
            open ? "pt-8" : ""
          } duration-1000`}
        >
          {data.body ||
            data.subMenu.map((item: any, index: number) => (
              <a key={index} href={item.link}>
                <p>{item.label}</p>
              </a>
            ))}
        </div>
      </div>
    </article>
  );
};

export default Expandable2;
