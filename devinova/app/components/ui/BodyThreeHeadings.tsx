import { sectionData } from "@/app/utils/interfaces";
import BodyTwoHeadings from "./BodyTwoHeadings";

const BodyThreeHeadings = ({ data }: { data: sectionData }) => {
  return (
    <>
      <h6 className="text-sm  text-white">{data.subHeadAbove}</h6>
      <BodyTwoHeadings data={data} />
    </>
  );
};

export default BodyThreeHeadings;
