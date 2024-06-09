import { StaticImageData } from "next/image";
import CardDetails from "./CardDetails";
import { sectionData } from "@/app/utils/interfaces";

const CardDesktop = ({
  data,
  image,
}: {
  data: sectionData;
  image: StaticImageData;
}) => {
  const text = (
    <p className="text-neutralGrey text-sm tracking-wide leading-6 p-1">
      {data.body}
    </p>
  );

  return <CardDetails data={data} image={image} TextType={text} />;
};

export default CardDesktop;
