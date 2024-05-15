import { StaticImageData } from "next/image";
import CardDetails from "./CardDetails";
import ExpandBasic from "./ExpandBasic";
import { sectionData } from "@/app/utils/interfaces";

const CardMobile = ({
  data,
  image,
}: {
  data: sectionData;
  image: StaticImageData;
}) => {
  return (
    <CardDetails
      data={data}
      image={image}
      TextType={<ExpandBasic data={data} textColor="" />}
    />
  );
};

export default CardMobile;
