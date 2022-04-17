import React from "react";
import { platforms, footerData } from "./data/items";

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="container mx-auto flex max-w-7xl flex-col p-12 pb-0">
        {/* footer grid */}
        <div className="grid grid-cols-[repeat(4,2fr)_1fr] xl:grid-cols-3 xl:gap-y-12 md:grid-cols-2 ">
          {/* menu 1 */}
          <div className="flex flex-col space-y-2">
            <span className="mb-2 text-lg tracking-wide	text-primaryViolet">
              Getir'i indirin!
            </span>
            {/* platform images */}
            <div className="mt-9 flex flex-col space-y-2">
              {platforms.map((platform) => {
                return (
                  <img
                    className="h-12 w-40"
                    src={platform.path}
                    alt={platform.alt}
                  ></img>
                );
              })}
            </div>
          </div>

          {/* I know I know, it would be better if I separated the menus as components. */}
          {/* menu2 */}
          <div className="flex flex-col">
            <span className="mb-2 text-lg tracking-wide	text-primaryViolet">
              Getir'i keşfedin
            </span>

            <div className="flex flex-col space-y-2">
              {footerData[2].items.map((item) => {
                return <span>{item.title}</span>;
              })}
            </div>
          </div>

          {/* menu1 */}
          <div className="flex flex-col">
            <span className="mb-2 text-lg tracking-wide	text-primaryViolet">
              Yardıma mı ihtiyacınız var?
            </span>

            <div className="flex flex-col space-y-2">
              {footerData[1].items.map((item) => {
                return <span>{item.title}</span>;
              })}
            </div>
          </div>

          {/* menu0 */}
          <div className="flex flex-col">
            <span className="mb-2 text-lg tracking-wide	text-primaryViolet">
              İş Ortağımız Olun
            </span>

            <div className="flex flex-col space-y-2">
              {footerData[0].items.map((item) => {
                return <span>{item.title}</span>;
              })}
            </div>
          </div>

          <img src="/images/barkod.png" alt="barkod" />
        </div>
      </div>
    </footer>
  );
};
