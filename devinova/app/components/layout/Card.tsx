import { StaticImageData } from "next/image";
import CardDesktop from "../ui/CardDesktop";
import CardMobile from "../ui/CardMobile";
import { sectionData } from "@/app/utils/interfaces";

const Card = ({
  data,
  image,
}: {
  data: sectionData;
  image: StaticImageData;
}) => {
  return (
    <>
      <div className=" hidden md:flex">
        <CardDesktop data={data} image={image} />
      </div>
      <div className=" md:hidden">
        <CardMobile data={data} image={image} />
      </div>
    </>
  );
};

export default Card;
