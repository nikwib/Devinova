import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileMenu = () => {
  return (
    <div className="text-neutralGrey lg:hidden">
      <GiHamburgerMenu />
    </div>
  );
};

export default MobileMenu;
