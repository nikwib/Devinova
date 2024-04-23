import React from "react";

const BodyTwoHeadings = ({ data }: { data: any }) => {
  return (
    <>
      <h4 className="text-4xl py-4">{data.title}</h4>
      <h6 className="text-sm">{data.subHead}</h6>
      <p className="py-4">{data.body}</p>
    </>
  );
};

export default BodyTwoHeadings;
