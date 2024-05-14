import { StaticImageData } from "next/image";
import CardDetails from "./CardDetails";

const CardDesktop = ({
  data,
  image,
}: {
  data: any;
  image: StaticImageData;
}) => {
  const text = (
    <p className="dark:text-neutralGrey text-sm tracking-wide leading-6 p-1">
      {data.body}
    </p>
  );

  return <CardDetails data={data} image={image} TextType={text} />;
};

export default CardDesktop;
