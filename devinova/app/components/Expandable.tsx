"use client";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Expandable = ({
  data,
  textColor,
  color,
}: {
  data: any;
  textColor: string;
  color: string;
}) => {
  const [open, setOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLParagraphElement>(null);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.clientHeight);
    }
  }, [open]);

  return (
    <article className="py-5 w-full">
      <section
        className={`border-b-[1px] ${
          color === "white" ? "border-white" : "border-black"
        } pb-2 pl-5 flex items-center justify-between`}
      >
        <h3 className={`text-3xl  ${textColor}`}>{data.title}</h3>
        <button className={`text-2xl text-${color}`} onClick={handleOpen}>
          {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </section>

      <section
        className={`relative transition-linear ease-in-out duration-500 overflow-hidden
${open ? `h-[${contentHeight}px]` : "h-0"}
`}
      >
        <p
          className={`transition-all ease-in-out duration-500 text-${color} ${
            open ? "" : "-translate-y-full"
          }`}
          ref={contentRef}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet eum
          nulla ipsa velit, veritatis qui deserunt excepturi perspiciatis nihil
          fugiat fuga nostrum ullam ea, ut laboriosam debitis laudantium
          incidunt nemo! heer Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Eveniet eum nulla ipsa velit, veritatis qui deserunt
          excepturi perspiciatis nihil fugiat fuga nostrum ullam ea, ut
          laboriosam debitis laudantium incidunt nemo! there Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Eveniet eum nulla ipsa velit,
          veritatis qui deserunt excepturi perspiciatis nihil fugiat fuga
          nostrum ullam ea, ut laboriosam debitis laudantium incidunt nemo!
          balla Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Eveniet eum nulla ipsa velit, veritatis qui deserunt excepturi
          perspiciatis nihil fugiat fuga nostrum ullam ea, ut laboriosam debitis
          laudantium incidunt nemo!
        </p>
      </section>
    </article>
  );
};

export default Expandable;
