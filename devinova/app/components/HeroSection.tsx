import Image, { StaticImageData } from "next/image";
import TransparentWithBorderBtn from "./buttons/TransparentWithBorderBtn";
import PurpleBtn from "./buttons/library/PurpleBtn";

const HeroSection = ({
  image,
  TextArea,
  imageRight,
}: {
  image: StaticImageData;
  TextArea: JSX.Element;
  imageRight: boolean;
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row bg-[url('../public/background.png')] w-full min-h-screen ${
        imageRight && "flex-col-reverse md:flex-row-reverse"
      } `}
    >
      <div
        className={`relative md:w-1/2 min-h-[50vh] flex justify-center items-center ${
          imageRight ? "md:justify-start" : "md:justify-end"
        }`}
      >
        <Image
          alt="pic"
          src={image}
          className=" w-4/5 min-w-[291px] max-w-[325px] md:max-w-none"
        />
      </div>
      <div className="flex flex-col justify-center md:w-1/2 h-full opacity-100 p-10 md:p-20 xl:p-32">
        {TextArea}
        <div className="flex flex-row flex-wrap gap-x-4">
          <PurpleBtn btnText={"Read More"} />
          <TransparentWithBorderBtn btnText={"Contact"} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
