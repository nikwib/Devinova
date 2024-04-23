import TextImage1 from "./components/TextImage1";
import meetingImage from "../public/meeting.png"
import meetingImage2 from "../public/meeting2.png"

import TextImage2 from "./components/TextImage2";
export default function Home() {

const TextWithButton = () => {
  return(<div>Hiii</div>)
}

  return (<>
    <TextImage1 image={meetingImage} TextWithButton={TextWithButton} imageRight={true} />
    <TextImage2 image={meetingImage2} TextWithButton={TextWithButton} imageRight={true} />

    </>
  );
}
