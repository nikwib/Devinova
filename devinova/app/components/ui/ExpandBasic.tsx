"use client";
import { useState } from "react";
import ExpandBtn from "./buttons/ExpandBtn";
import ExpandTextSection from "./ExpandTextSection";

const ExpandBasic = ({ data, textColor }: { data: any; textColor: string }) => {
  const [open, setOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <article className="pb-5 w-full">
      <section className=" pb-2 gap-x-4 flex items-center dark:border-white">
        <h3
          className={`text-2xl ${
            textColor ? textColor : "dark:text-neutralGrey"
          }`}
        >
          {data.title}
        </h3>

        <ExpandBtn handleOpen={handleOpen} open={open} />
      </section>
      <section
        className={
          data.type == "ExpandBorderBottom" ? "border-b-[1px] pb-4" : ""
        }
      >
        {" "}
        {/* add only for mobile view */}
        <ExpandTextSection
          open={open}
          contentHeight={contentHeight}
          setContentHeight={setContentHeight}
          data={data}
        />
      </section>
    </article>
  );
};

export default ExpandBasic;
