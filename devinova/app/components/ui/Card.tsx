import Image, { StaticImageData } from "next/image";

const Card = ({ data, image, TextType }: { data: any; image: StaticImageData, TextType: any }) => {

  return (
    <div
      className=" flex flex-col items-center" //w: 384px
      style={{ maxWidth: `${image.width}px` }}
    >
      <div className="bg-neutralGreyNight flex flex-col justify-center rounded-xl py-6 px-2 mb-7 ">
        <h4 className="mb-8 text-center dark:text-neutralGrey font-bold tracking-wide">
          {data.title}
        </h4>
        <Image src={image} alt={data.title} className="pb-6" />
      </div>
      {TextType}
    </div>
  );
};

export default Card