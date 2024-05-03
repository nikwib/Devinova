import { StaticImageData } from "next/image";
import Card from "./Card";

const BigCard = ({ data, image }: { data: any; image: StaticImageData }) => {
  const text = <p className="dark:text-neutralGrey text-sm tracking-wide leading-6 p-1">{data.body}</p>
 
  return <Card data={data} image={image} TextType={text} />;
};

export default BigCard;
