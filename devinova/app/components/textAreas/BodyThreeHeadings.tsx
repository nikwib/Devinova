import BodyTwoHeadings from "./BodyTwoHeadings";

const BodyThreeHeadings = ({ data }: { data: any }) => {
  return (
    <>
      <h6 className="text-sm">{data.subHeadAbove}</h6>
      <BodyTwoHeadings data={data} />
    </>
  );
};

export default BodyThreeHeadings;
