import React from "react";
import Expandable from "../ui/Expandable";
import Expandable2 from "../ui/expandable2";
import { data } from "@/app/utils/interfaces";

const ExpandableList = ({ data }: { data: data[] }) => {
  return (
    <div className="w-full flex flex-col px-14 py-32 gap-20">
      {data.map((item: any, index: number) => (
        <Expandable2 key={index} data={item} textColor={"text-notification"} />
      ))}

      <Expandable data={data[0]} textColor={"text-primary"} />
      <Expandable data={data[1]} textColor={"text-secondary"} />
      <Expandable data={data[2]} textColor={"text-notification"} />
    </div>
  );
};

export default ExpandableList;
