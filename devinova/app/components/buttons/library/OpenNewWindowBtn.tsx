import { RxOpenInNewWindow } from "react-icons/rx";
import BtnWithIcon from "../BtnWithIcon";

const OpenNewWindowBtn = ({ btnText }: { btnText: string }) => {
  return <BtnWithIcon btnText={btnText} icon={<RxOpenInNewWindow />} />;
};

export default OpenNewWindowBtn;
