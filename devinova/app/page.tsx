import TextImage1 from "./components/layout/TextImage1";
import meetingImage from "../public/meeting.png";
import TextWithButton from "./components/layout/TextWithButton";
import meetingImage2 from "../public/meeting2.png";
import heroImage from "../public/hero.png";
import TextImage2 from "./components/layout/TextImage2";
import HeroSection from "./components/layout/HeroSection";
import LeftArrowInCircleBtn from "./components/layout/buttons/LeftArrowInCircleBtn";
import OpenNewWindowBtn from "./components/layout/buttons/OpenNewWindowBtn";
import BodyTwoHeadings from "./components/ui/BodyTwoHeadings";
import Expandable from "./components/ui/Expandable";
import ExpandableList from "./components/layout/ExpandableList";

const data = {
  data: {
    subHeadAbove: "subhead above",
    title: "Creative",
    subHead: "Subhead",
    body: "In today's fast-paced world, effective communication is more crucial than ever. Whether it's conveying ideas, building relationships, or driving business success, clear and compelling communication is key. At our company, we understand the power of words to inspire, inform, and engage. With our team of skilled professionals, we strive to deliver communication solutions tailored to your needs. From crafting captivating content to developing impactful strategies, we are committed to helping you achieve your goals",
    button: <OpenNewWindowBtn btnText="Open" />,
  },
  data2: {
    subHeadAbove: "subhead above",
    title: "Curious",
    subHead: "Subhead",
    body: "In today's fast-paced world, effective communication is more crucial than ever. Whether it's conveying ideas, building relationships, or driving business success, clear and compelling communication is key. At our company, we understand the power of words to inspire, inform, and engage. With our team of skilled professionals, we strive to deliver communication solutions tailored to your needs. From crafting captivating content to developing impactful strategies, we are committed to helping you achieve your goals",
    button: <OpenNewWindowBtn btnText="Open" />,
  },
  data3: {
    subHeadAbove: "subhead above",
    title: "Friendly",
    subHead: "Subhead",
    body: "Whether it's conveying ideas, building relationships, or driving business success, clear and compelling communication is key. At our company, we understand the power of words to inspire, inform, and engage. With our team of skilled professionals, we strive to deliver communication solutions tailored to your needs. From crafting captivating content to developing impactful strategies, we are committed to helping you achieve your goals",
    button: <OpenNewWindowBtn btnText="Open" />,
  },
}


const Home = () => {
  return (
    <main className="min-h-screen w-full pb-96">
      <HeroSection image={heroImage} TextArea={<BodyTwoHeadings data={data.data2} />} imageRight={false} />
    <TextImage1 image={meetingImage} TextWithButton={<TextWithButton data={data.data}/>} imageRight={false} />
    <TextImage2 image={meetingImage2} TextWithButton={<TextWithButton data={data.data2} />} imageRight={false} />
      <div className="w-1/2">
      <Expandable data={data.data} textColor={"text-white"} />
      <Expandable data={data.data3} textColor={"text-pink-400"} />
      <p>hello</p>
      </div>
      <ExpandableList data={data} />
    </main>
  );
};

export default Home;
