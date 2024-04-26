import Image, { StaticImageData } from "next/image";

const Card = ({ data, image }: { data: any; image: StaticImageData }) => {
  const width = image.width;
  const height = image.width + "px";
  console.log(height);

  return (
    <div
      className=" flex flex-col items-center"
      style={{ maxWidth: `${width}px` }}
    >
      <div className="bg-neutralGreyNight flex flex-col justify-center rounded-xl py-6 mb-7 ">
        <h4 className="mb-8 text-center dark:text-neutralGrey font-bold tracking-wide">
          {data.title}
        </h4>
        <Image src={image} alt={data.title} className="pb-6" />
      </div>
      <p
        className="dark:text-neutralGrey text-sm tracking-wide leading-6"
        style={{ maxWidth: `${width - 50}px` }}
      >
        {data.body}
      </p>
    </div>
  );
};

export default Card