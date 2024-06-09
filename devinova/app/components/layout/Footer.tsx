import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full p-20 flex flex-col md:flex-row md:justify-between gap-6 justify-center items-center text-neutralGrey">
      <div className="text-center md:text-start ">
        <p>DEVINOVA GROUP AB</p>
        <p>Bockhamnsvägen 8</p>
        <p>43650 Hovås </p>
        <p>+46 732500582</p>
        <p className="text-slate-400">niklas@devinova.se</p>
      </div>
      <div className="flex gap-6">
        {/* <FaXTwitter />
        <FaInstagram />
        <FaLinkedinIn /> */}
      </div>
    </div>
  );
};

export default Footer;
