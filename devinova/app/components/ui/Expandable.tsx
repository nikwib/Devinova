"use client";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Expandable = ({
  data,
  textColor,
}: {
  data: any;
  textColor: string;
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
    <article className="pb-5 w-full p-5">
      <section
        className="border-b-[1px] pb-2 pl-5 flex items-center justify-between dark:border-white"
      >
        <h3 className={`text-3xl ${textColor ? textColor : 'dark:text-neutralGrey'}`}>{data.title}</h3>
        <button className={`text-2xl dark:text-neutralGrey`} onClick={handleOpen}>
          {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </section>

      <section className="relative transition-linear ease-in-out duration-500 overflow-hidden"
      style={{ maxHeight: open ? `${contentHeight}px` : '0' }}>
        <p
          className="transition-all ease-in-out duration-500 dark:text-neutralGrey pt-8"
          ref={contentRef}
          style={{ transform: open ? 'translateY(0)' : 'translateY(-100%)' }}
        >
          {data.body}
        </p>
      </section>
    </article>
  );
};

export default Expandable;
