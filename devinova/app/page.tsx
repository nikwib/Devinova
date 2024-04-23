import TextImage1 from "./components/TextImage1";
import meetingImage from "../public/meeting.png"
import TextWithButton from "./components/TextWithButton";
import meetingImage2 from "../public/meeting2.png"
import TextImage2 from "./components/TextImage2";

const Home = () => {

  return (
    <main>
    <TextImage1 image={meetingImage} TextWithButton={TextWithButton} imageRight={true} />
    </main>
  );
};

export default Home;
