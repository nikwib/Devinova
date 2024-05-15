import logo from "@/app/assets/logo.png";
import Image from "next/image";
import NavBar from "../ui/NavBar";
import MobileMenu from "../ui/MobileMenu";
import getData from "@/app/utils/fetchSanityData";
import { menuItems } from "@/app/utils/interfaces";
import { allMenuItems } from "@/app/utils/queries";
const Header = async () => {
  const menu: menuItems[] | null = await getData(allMenuItems, "allMenuItems");

  return (
    <div className=" bg-[#1f2228] lg:border-none border-b-gray-600 border-b-4 p-8 flex flex-row justify-between">
      <div>
        <Image src={logo} alt="Devinova Logo" width={200} height={100} />
      </div>
      {menu ? (
        <div className="flex items-center">
          <MobileMenu data={menu} />
          <NavBar data={menu} />
        </div>
      ) : null}
    </div>
  );
};

export default Header;
