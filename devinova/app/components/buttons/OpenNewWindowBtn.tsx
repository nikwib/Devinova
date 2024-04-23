import { RxOpenInNewWindow } from "react-icons/rx";
import CallToActionBtn from "./CallToActionBtn";

const OpenNewWindowBtn = ({ btnText }: { btnText: string }) => {
  return <CallToActionBtn btnText={btnText} icon={<RxOpenInNewWindow />} />;
};

export default OpenNewWindowBtn;
