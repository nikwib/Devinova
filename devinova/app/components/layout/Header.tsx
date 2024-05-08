import logo from "@/app/assets/logo.png";
import Image from "next/image";
import NavBar from "../ui/NavBar";
import MobileMenu from "../ui/MobileMenu";
const Header = () => {
  return (
    <div className="p-8 flex flex-row justify-between">
      <div>
        <Image src={logo} alt="Devinova Logo" width={200} height={100} />
      </div>
      <div>
        <MobileMenu />
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
