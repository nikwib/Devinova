import { StaticImageData } from "next/image";
import CardDesktop from "../ui/CardDesktop";
import CardMobile from "../ui/CardMobile";

const Card = ({ data, image }: { data: any; image: StaticImageData }) => {
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
