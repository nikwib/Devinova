import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-40 p-20  flex justify-between items-center text-neutralGrey">
      <div>
        <p>DEVINOVA</p>
        <p>Vägenvägen xx</p>
        <p>xxx xx Staden </p>
        <p>+46 000 000 000</p>
        <p className="text-slate-400">info@devinova.se</p>

      </div>
      <div className="flex gap-6">
      <FaXTwitter />
      <FaInstagram />
      <FaLinkedinIn />
      </div>
    </div>
  );
};

export default Footer;
