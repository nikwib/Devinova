import BodyThreeHeadings from "../ui/BodyThreeHeadings";
import BodyTwoHeadings from "../ui/BodyTwoHeadings";

const TextWithButton = ( { data } : {data: any} ) => {
  return (
    <div>
      {data.subHeadAbove ? (
        <BodyThreeHeadings data={data} />
      ) : (
        <BodyTwoHeadings data={data} />
      )}

      {data.button}
    </div>
  );
};

export default TextWithButton;
