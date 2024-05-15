import { IconType } from "react-icons";

const BtnWithIcon = ({
  btnText,
  icon,
}: {
  btnText: string;
  icon: JSX.Element;
}) => {
  return (
    <button className="flex gap-2 shadow-lg shadow-black my-4 bg-secondary select-none text-customGrey px-6 min-w-52 py-3 items-center rounded-md justify-center text-lg">
      {btnText}
      <span className="text-xl">{icon}</span>
    </button>
  );
};

export default BtnWithIcon;
