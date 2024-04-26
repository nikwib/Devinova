import Image, { StaticImageData } from "next/image";

const TextImage1 = ({
  image,
  TextWithButton,
  imageRight,
}: {
  image: StaticImageData;
  TextWithButton: JSX.Element;
  imageRight: boolean;
}) => {

  return (
    <div
      className={`flex flex-col md:flex-row bg-[url('../public/background.png')] w-full min-h-screen ${
        imageRight && "flex-col-reverse md:flex-row-reverse"
      } `}
    >
      <div className="relative md:w-1/2 min-h-[50vh]">
        <Image alt="pic" src={image} layout="fill" objectFit="cover" />
      </div>
      <div className="flex justify-center items-center md:w-1/2 h-full opacity-100 p-10 md:p-20 xl:p-32">
        {TextWithButton}
      </div>
    </div>
  );
};

export default TextImage1;