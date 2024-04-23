import TextImage1 from "./components/TextImage1";
import meetingImage from "../public/meeting.png"
import TextWithButton from "./components/TextWithButton";

const Home = () => {

  return (
    <main>
    <TextImage1 image={meetingImage} TextWithButton={TextWithButton} imageRight={true} />
    </main>
  );
};

export default Home;
