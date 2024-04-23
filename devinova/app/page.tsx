import TextImage1 from "./components/TextImage1";
import meetingImage from "../public/meeting.png"
export default function Home() {

const TextWithButton = () => {
  return(<div>Hiii</div>)
}

  return (<>
    <TextImage1 image={meetingImage} TextWithButton={TextWithButton} imageRight={true} />
    </>
  );
}
