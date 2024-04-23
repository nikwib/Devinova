import React from "react";

const BodyTwoHeadings = ({ component }: { component: any }) => {
  return (
    <>
      <h4 className="text-4xl py-4">{component.title}</h4>
      <h6 className="text-sm">{component.subHead}</h6>
      <p className="py-4">{component.body}</p>
    </>
  );
};

export default BodyTwoHeadings;
