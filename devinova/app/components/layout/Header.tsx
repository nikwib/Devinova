import logo from "@/app/assets/logo.png";
import Image from "next/image";
import NavBar from "../ui/NavBar";
import MobileMenu from "../ui/MobileMenu";
const Header = () => {
  const menu = [
    {
      label: "Home",
      link: "#",
    },
    { label: "New Nova", link: "#" },
    { label: "Career", link: "#" },
    {
      label: "Services",
      link: "#",
      subMenu: [
        {
          label: "Services1",
          link: "#",
        },
        { label: "Services2", link: "#" },
        { label: "Services3", link: "#" },
      ],
    },
    { label: "About", link: "#" },
    { label: "Contact", link: "#" },
  ];
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