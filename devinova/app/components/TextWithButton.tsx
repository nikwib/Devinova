import BodyThreeHeadings from "./textAreas/BodyThreeHeadings";
import BodyTwoHeadings from "./textAreas/BodyTwoHeadings";

const TextWithButton = ( { data } : {data: any} ) => {
  return (
    <div className="dark:text-white">
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
