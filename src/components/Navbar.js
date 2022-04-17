import React from "react";
import { menuItems } from "../data/items";
import {
  BsFillPersonPlusFill,
  BsFillPersonFill,
  BsGlobe,
} from "react-icons/bs";

export const Navbar = () => {
  return (
    <nav
      id="nav"
      className=" sticky left-0 top-0 z-50 bg-primaryViolet px-12 sm:px-8 xsm:px-2"
    >
      {/* nav container */}
      <div className="container mx-auto flex  h-11	 max-w-7xl justify-between">
        {/* menu */}
        <div className="flex items-center">
          {menuItems.map((item, index) => {
            return (
              <a
                className="mt-1 flex h-9 items-center rounded-tl-borderM rounded-tr-borderM px-6 
                text-base font-medium text-paleWhite hover:bg-lightPrimary hover:text-brandYellow sm:text-sm"
                key={index}
                href={item.link}
              >
                {item.title}
              </a>
            );
          })}
        </div>
        {/* options menu*/}
        <div className="flex space-x-8 text-sm sm:hidden">
          {/* menu item 1 */}
          <div className="flex cursor-pointer items-center space-x-2	">
            <BsGlobe className="text-paleWhite" />
            <span className="text-paleWhite lg:hidden ">Türkçe (TR)</span>
          </div>

          {/* menu item 2 */}
          <div className="flex cursor-pointer items-center space-x-2	">
            <BsFillPersonFill className="text-xl text-paleWhite" />
            <span className="font-semibold text-paleWhite lg:hidden">
              Giriş Yap
            </span>
          </div>

          {/* menu item 1 */}
          <div className="flex cursor-pointer items-center space-x-2	">
            <BsFillPersonPlusFill className="text-xl text-paleWhite" />
            <span className="font-semibold text-paleWhite lg:hidden">
              Kayıt Ol
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
