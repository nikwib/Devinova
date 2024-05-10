import { StaticImageData } from "next/image";
import CardDetails from "./CardDetails";
import ExpandBasic from "./ExpandBasic";

const CardMobile = ({ data, image }: { data: any; image: StaticImageData }) => {
  return (
    <CardDetails
      data={data}
      image={image}
      TextType={<ExpandBasic data={data} textColor="" />}
    />
  );
};

export default CardMobile;
