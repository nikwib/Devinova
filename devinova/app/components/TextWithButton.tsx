import DesktopBtn from "./buttons/GoToBtn";
import BodyThreeHeadings from "./textAreas/BodyThreeHeadings";
import BodyTwoHeadings from "./textAreas/BodyTwoHeadings";

const data = {
  subHeadAbove: "",
  title: "Title",
  subHead: "Subhead",
  body: "In today's fast-paced world, effective communication is more crucial than ever. Whether it's conveying ideas, building relationships, or driving business success, clear and compelling communication is key. At our company, we understand the power of words to inspire, inform, and engage. With our team of skilled professionals, we strive to deliver communication solutions tailored to your needs. From crafting captivating content to developing impactful strategies, we are committed to helping you achieve your goals",
  button: <DesktopBtn btnText="Apply" />,
};

const TextWithButton = (/* { data } : {data: any} */) => {
  return (
    <div className="dark:text-white">
      {data.subHeadAbove ? (
        <BodyThreeHeadings data={data} />
      ) : (
        <BodyTwoHeadings data={data} />
      )}

      {data.button}
    </div>
  );
};

export default TextWithButton;
