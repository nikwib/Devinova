import BodyTwoHeadings from "./BodyTwoHeadings";

const BodyThreeHeadings = ({ component }: { component: any }) => {
  return (
    <>
      <h6 className="text-sm">{component.subHeadAbove}</h6>
      <BodyTwoHeadings component={component} />
    </>
  );
};

export default BodyThreeHeadings;
