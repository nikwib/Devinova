import BodyThreeHeadings from "../ui/BodyThreeHeadings";
import BodyTwoHeadings from "../ui/BodyTwoHeadings";
import ArrowInCircleBtn from "./buttons/ArrowInCircleBtn";
import ArrowBtn from "./buttons/ArrowBtn";
import OpenNewWindowBtn from "./buttons/OpenNewWindowBtn";
const TextWithButton = ({ data }: { data: any }) => {
  return (
    <div>
      {data.subHeadAbove ? (
        <BodyThreeHeadings data={data} />
      ) : (
        <BodyTwoHeadings data={data} />
      )}
      {data.buttonType == "arroCircle" ? (
        <ArrowInCircleBtn btnText={data.button} />
      ) : data.buttonType == "arro" ? (
        <ArrowBtn btnText={data.button} />
      ) : data.buttonType == "open" ? (
        <OpenNewWindowBtn btnText={data.button} />
      ) : (
        ""
      )}
    </div>
  );
};

export default TextWithButton;
