import { RxOpenInNewWindow } from "react-icons/rx";
import BtnWithIcon from "../../ui/buttons/BtnWithIcon";

const OpenNewWindowBtn = ({ btnText }: { btnText: string }) => {
  return <BtnWithIcon btnText={btnText} icon={<RxOpenInNewWindow />} />;
};

export default OpenNewWindowBtn;
