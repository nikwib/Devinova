import Image, { StaticImageData } from "next/image";
import React from "react";

const TextImage1 = ({
  image,
  TextWithButton,
  imageRight,
}: {
  image: StaticImageData;
  TextWithButton: () => JSX.Element;
  imageRight: boolean;
}) => {

  return (
    <div
      className={`flex flex-col md:flex-row bg-[#2B303A] w-full h-[100vh] ${
        imageRight && "flex-col-reverse md:flex-row-reverse"
      } `}
    >
      <div className="relative md:w-1/2 h-full">
        <Image alt="pic" src={image} layout="fill" objectFit="cover" />
      </div>
      <div className="flex justify-center items-center md:w-1/2 h-full opacity-100">
        <TextWithButton />
      </div>
    </div>
  );
};

export default TextImage1;
