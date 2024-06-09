import Image from "next/image";
const TextImage1 = ({
  image,
  TextArea,
  imageRight,
}: {
  image: string;
  TextArea: React.JSX.Element;
  imageRight: boolean;
}) => {
  return (
    <div
      className={`relative flex flex-col md:flex-row w-full min-h-screen ${
        imageRight ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Overlay div for background image brightness */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0"></div>
      {/* Background image */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('../public/aibackground.webp')] bg-no-repeat bg-cover z-0 filter  brightness-[0.20]"></div>

      {/* Content sections */}
      <div className="relative z-10 md:w-1/2 min-h-[50vh] filter  brightness-[0.75]">
        <Image alt="pic" src={image} layout="fill" objectFit="cover" />
      </div>
      <div className="flex justify-center items-center md:w-1/2 h-full p-10 md:p-20 xl:p-32 z-10">
        {TextArea}
      </div>
    </div>
  );
};

export default TextImage1;

// const TextImage1 = ({
//   image,
//   TextArea,
//   imageRight,
// }: {
//   image: string;
//   TextArea: React.JSX.Element;
//   imageRight: boolean;
// }) => {
//   return (
//     <div
//       className={`flex flex-col md:flex-row bg-[url('../public/aibackground.webp')]  bg-no-repeat bg-cover filter brightness-50 w-full min-h-screen ${
//         imageRight && "flex-col-reverse md:flex-row-reverse"
//       } `}
//     >
//       <div className="relative md:w-1/2 min-h-[50vh]">
//         <Image alt="pic" src={image} layout="fill" objectFit="cover" />
//       </div>
//       <div className="flex justify-center items-center md:w-1/2 h-full opacity-100 p-10 md:p-20 xl:p-32">
//         {TextArea}
//       </div>
//     </div>
//   );
// };

// export default TextImage1;
