import Image from "next/image";

const TextImage2 = ({
  image,
  TextArea,
  imageRight,
}: {
  image: string;
  TextArea: JSX.Element;
  imageRight: boolean;
}) => {
  return (
    <div
      className={`relative flex flex-col md:flex-row w-full min-h-screen ${
        imageRight && "flex-col-reverse md:flex-row-reverse"
      }`}
    >
      {/* Background image with reduced brightness */}
      {/* Background image */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('../public/aibackground.webp')] bg-no-repeat bg-cover z-0 filter  brightness-[0.20]"></div>
      {/* Foreground content */}
      <div
        className={`relative z-10 md:w-1/2 min-h-[50vh] flex justify-center items-center ${
          imageRight ? "md:justify-start" : "md:justify-end"
        }`}
      >
        <Image
          alt="pic"
          src={image}
          width={500}
          height={600}
          className="w-4/5 min-w-[291px] max-w-[325px] md:max-w-none"
        />
      </div>
      <div className="flex justify-center items-center md:w-1/2 h-full p-10 md:p-20 xl:p-32 z-10">
        {TextArea}
      </div>
    </div>
  );
};

export default TextImage2;
