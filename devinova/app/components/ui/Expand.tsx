"use client";
import { useState } from "react";
import ExpandTextSection from "./ExpandTextSection";
import ExpandBtn from "./buttons/ExpandBtn";
import { sectionData } from "@/app/utils/interfaces";

const Expand = ({
  data,
  textColor,
}: {
  data: sectionData;
  textColor: string;
}) => {
  const [open, setOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <article className="pb-5 w-full p-5">
      <section className="border-b-[1px] pb-2 pl-5 flex items-center justify-between dark:border-white">
        <h3
          className={`text-3xl ${
            textColor ? textColor : "dark:text-neutralGrey"
          }`}
        >
          {data.title}
        </h3>
        <ExpandBtn handleOpen={handleOpen} open={open} />
      </section>

      <ExpandTextSection
        open={open}
        contentHeight={contentHeight}
        setContentHeight={setContentHeight}
        data={data}
      />
    </article>
  );
};

export default Expand;
