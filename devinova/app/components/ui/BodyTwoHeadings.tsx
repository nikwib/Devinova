import { sectionData } from "@/app/utils/interfaces";

const BodyTwoHeadings = ({ data }: { data: sectionData }) => {
  return (
    <>
      <h4 className="text-4xl py-4 dark:text-white">{data.title}</h4>
      <h6 className="text-sm dark:text-white">{data.subHead}</h6>
      <p className="py-4 dark:text-white">{data.body}</p>
    </>
  );
};

export default BodyTwoHeadings;
