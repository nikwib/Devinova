import TextImage1 from "./components/TextImage1";
import meetingImage from "../public/meeting.png";
import TextWithButton from "./components/TextWithButton";
import meetingImage2 from "../public/meeting2.png";
import heroImage from "../public/hero.png";
import TextImage2 from "./components/TextImage2";
import HeroSection from "./components/HeroSection";
import LeftArrowInCircleBtn from "./components/buttons/library/LeftArrowInCircleBtn";
import OpenNewWindowBtn from "./components/buttons/library/OpenNewWindowBtn";
import BodyTwoHeadings from "./components/textAreas/BodyTwoHeadings";
import Expandable from "./components/Expandable";

const data2 = {
  subHeadAbove: "subhead above",
  title: "Title",
  subHead: "Subhead",
  body: "In today's fast-paced world, effective communication is more crucial than ever. Whether it's conveying ideas, building relationships, or driving business success, clear and compelling communication is key. At our company, we understand the power of words to inspire, inform, and engage. With our team of skilled professionals, we strive to deliver communication solutions tailored to your needs. From crafting captivating content to developing impactful strategies, we are committed to helping you achieve your goals",
  button: <OpenNewWindowBtn btnText="Open" />,
};
const data1 = {
  subHeadAbove: "",
  title: "Title",
  subHead: "Subhead",
  body: "In today's fast-paced world, effective communication is more crucial than ever. Whether it's conveying ideas, building relationships, or driving business success, clear and compelling communication is key. At our company, we understand the power of words to inspire, inform, and engage. With our team of skilled professionals, we strive to deliver communication solutions tailored to your needs. From crafting captivating content to developing impactful strategies, we are committed to helping you achieve your goals",
  button: <LeftArrowInCircleBtn btnText="Apply" />,
};

const Home = () => {
  return (
    <main className="min-h-screen w-full p-20 ">
      {/* <HeroSection image={heroImage} TextArea={<BodyTwoHeadings data={data1} />} imageRight={false} />
    <TextImage1 image={meetingImage} TextWithButton={<TextWithButton data={data1}/>} imageRight={false} />
    <TextImage2 image={meetingImage2} TextWithButton={<TextWithButton data={data2} />} imageRight={false} /> */}
      <div className="w-2/3 h-[500px]">
      <Expandable data={data1} textColor={"text-white"} color={'white'} />
      <Expandable data={data1} textColor={"text-pink-400"} color={'black'} />
      <p>hello</p>
      </div>
    </main>
  );
};

export default Home;
