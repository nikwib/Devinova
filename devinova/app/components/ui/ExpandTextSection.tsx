import { sectionData } from "@/app/utils/interfaces";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

const ExpandTextSection = ({
  open,
  contentHeight,
  setContentHeight,
  data,
}: {
  open: boolean;
  contentHeight: number;
  setContentHeight: Dispatch<SetStateAction<number>>;
  data: sectionData;
}) => {
  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.clientHeight);
    }
  }, [open]);

  return (
    <section
      className="relative transition-all ease-in-out duration-1000 overflow-hidden"
      style={{ maxHeight: open ? `${contentHeight}px` : "0" }}
    >
      <p
        className="transition-all ease-in-out duration-1000 dark:text-neutralGrey border-white"
        ref={contentRef}
        style={{ transform: open ? "translateY(0)" : "translateY(-100%)" }}
      >
        {data.body}
      </p>
    </section>
  );
};

export default ExpandTextSection;
