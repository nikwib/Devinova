import { sectionData } from "@/app/utils/interfaces";

const BodyTwoHeadings = ({ data }: { data: sectionData }) => {
  return (
    <>
      <h4 className="text-4xl py-4 text-neutralGrey">{data.title}</h4>
      <h6 className="text-sm text-neutralGrey">{data.subHead}</h6>
      <p className="py-4 text-neutralGrey">{data.body}</p>
    </>
  );
};

export default BodyTwoHeadings;
