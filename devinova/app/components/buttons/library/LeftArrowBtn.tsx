import { FaLongArrowAltRight } from "react-icons/fa";
import BtnWithIcon from "../BtnWithIcon";

const ArrowInCircleBtn = ({ btnText }: { btnText: string }) => {
  return <BtnWithIcon btnText={btnText} icon={<FaLongArrowAltRight />} />;
};

export default ArrowInCircleBtn;