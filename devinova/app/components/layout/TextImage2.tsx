import Image from "next/image";

const TextImage2 = ({
  image,
  TextArea,
  imageRight,
}: {
  image: string;
  TextArea: JSX.Element
  imageRight: boolean;
}) => {

  return (
    <div
      className={`flex flex-col md:flex-row bg-[url('../public/background.png')] bg-no-repeat bg-cover w-full min-h-screen ${
        imageRight && "flex-col-reverse md:flex-row-reverse"
      } `}
    >
      <div className={`relative md:w-1/2 min-h-[50vh] flex justify-center items-center ${imageRight ? "md:justify-start": "md:justify-end"}`}>
        <Image alt="pic" src={image}  width={500}
          height={600} className=" w-4/5 min-w-[291px] max-w-[325px] md:max-w-none" />
      </div>
      <div className="flex justify-center items-center md:w-1/2 h-full opacity-100 p-10 md:p-20 xl:p-32">
        {TextArea}
      </div>
    </div>
  );
};

export default TextImage2;
