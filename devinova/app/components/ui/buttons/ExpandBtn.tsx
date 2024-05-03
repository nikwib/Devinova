import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ExpandBtn = ({ handleOpen, open }: { handleOpen: () => void, open: boolean }) => {
  return (
    <button className={`text-2xl dark:text-neutralGrey`} onClick={handleOpen}>
      {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
    </button>
  );
};

export default ExpandBtn;
