import { StaticImageData } from "next/image";
import Card from "./Card";
import ExpandBasic from "./ExpandBasic";

const BigCardExpand = ({ data, image }: { data: any; image: StaticImageData }) => {
  return <Card data={data} image={image} TextType={<ExpandBasic data={data} textColor="" />} />;
};

export default BigCardExpand;
