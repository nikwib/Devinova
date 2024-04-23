import { FaArrowAltCircleRight } from "react-icons/fa";
import CallToActionBtn from "./CallToActionBtn";

const GoToBtn = ({ btnText }: { btnText: string }) => {
  return <CallToActionBtn btnText={btnText} icon={<FaArrowAltCircleRight />} />;
};

export default GoToBtn;