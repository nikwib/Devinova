import TextImage1 from "./components/TextImage1";
import meetingImage from "../public/meeting.png"
import meetingImage2 from "../public/meeting2.png"
import heroImage from "../public/hero.png"

import TextImage2 from "./components/TextImage2";
import HeroSection from "./components/HeroSection";
export default function Home() {

const TextWithButton = () => {
  return(<div>Hiii</div>)
}
const HeroText = () => {
  return(<div><h1></h1>
  <p></p>
  <p></p>
  <div><button className="w-[220px]">Read More</button><button>Contact</button></div></div>)
}

  return (<>
  <HeroSection image={heroImage} TextWithButton={HeroText} imageRight={false} />
    <TextImage1 image={meetingImage} TextWithButton={TextWithButton} imageRight={false} />
    <TextImage2 image={meetingImage2} TextWithButton={TextWithButton} imageRight={false} />

    </>
  );
}
