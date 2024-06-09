import { sectionData } from "@/app/utils/interfaces";

const BodyTwoHeadings = ({ data }: { data: sectionData }) => {
  return (
    <>
      <h4 className="text-4xl py-4 text-white">{data.title}</h4>
      <h6 className="text-sm text-white">{data.subHead}</h6>
      <p className="py-4 text-white">{data.body}</p>
    </>
  );
};

export default BodyTwoHeadings;
