import BodyThreeHeadings from "../ui/BodyThreeHeadings";
import BodyTwoHeadings from "../ui/BodyTwoHeadings";
import ArrowInCircleBtn from "./buttons/ArrowInCircleBtn";
import ArrowBtn from "./buttons/ArrowBtn";
import OpenNewWindowBtn from "./buttons/OpenNewWindowBtn";
const TextWithButton = ({ data }: { data: any }) => {

  let buttonComponent = null;

  if (data.buttonType === "arroCircle") {
    buttonComponent = <ArrowInCircleBtn btnText={data.button} />;
  } else if (data.buttonType === "arro") {
    buttonComponent = <ArrowBtn btnText={data.button} />;
  } else if (data.buttonType === "open") {
    buttonComponent = <OpenNewWindowBtn btnText={data.button} />;
  }
  return (
    <div>
      {data.subHeadAbove ? (
        <BodyThreeHeadings data={data} />
      ) : (
        <BodyTwoHeadings data={data} />
      )}
      {buttonComponent}
    </div>
  );
};

export default TextWithButton;
