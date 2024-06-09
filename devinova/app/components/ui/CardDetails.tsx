import { sectionData } from "@/app/utils/interfaces";
import Image, { StaticImageData } from "next/image";

const CardDetails = ({
  data,
  image,
  TextType,
}: {
  data: sectionData;
  image: StaticImageData;
  TextType: JSX.Element;
}) => {
  return (
    <div
      className=" flex flex-col items-center"
      style={{ maxWidth: `${image.width}px` }}
    >
      <div className="bg-neutralGreyNight flex flex-col justify-center rounded-xl py-6 px-2 mb-7 ">
        <h4 className="mb-8 text-center text-neutralGrey font-bold tracking-wide">
          {data.title}
        </h4>
        <Image src={image} alt={data.title} className="pb-6" />
      </div>
      {TextType}
    </div>
  );
};

export default CardDetails;
