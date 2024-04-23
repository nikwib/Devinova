import TextImage1 from "./components/TextImage1";
import meetingImage from "../public/meeting.png"
import TextWithButton from "./components/TextWithButton";
import meetingImage2 from "../public/meeting2.png"
import heroImage from "../public/hero.png"

import TextImage2 from "./components/TextImage2";
import HeroSection from "./components/HeroSection";
const Home = () => {

  return (<main>
  <HeroSection image={heroImage} TextWithButton={TextWithButton} imageRight={false} />
    <TextImage1 image={meetingImage} TextWithButton={TextWithButton} imageRight={false} />
    <TextImage2 image={meetingImage2} TextWithButton={TextWithButton} imageRight={false} />

    </main>
  );
};

export default Home;
