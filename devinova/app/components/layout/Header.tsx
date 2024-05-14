import logo from "@/app/assets/logo.png";
import Image from "next/image";
import NavBar from "../ui/NavBar";
import MobileMenu from "../ui/MobileMenu";
import getData from "@/app/utils/menuItems";
import { menuItems } from "@/app/utils/interfaces";
const Header = async () => {
  const menu: menuItems[] | null = await getData();
  console.log("MEEEEENU", menu);

  return (
    <div className=" bg-[#1f2228] lg:border-none border-b-gray-600 border-b-4 p-8 flex flex-row justify-between">
      <div>
        <Image src={logo} alt="Devinova Logo" width={200} height={100} />
      </div>
      <div className="flex items-center">
        <MobileMenu data={menu} />
        <NavBar data={menu} />
      </div>
    </div>
  );
};

export default Header;
