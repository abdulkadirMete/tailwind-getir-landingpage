import React from "react";
import { platforms } from "../data/items";

export const Features = () => {
  return (
    <section id="features">
      <div className="container mx-auto flex max-w-7xl flex-col p-12">
        {/* content */}
        <div className="relative flex h-80 items-center overflow-hidden bg-primaryViolet bg-featuresBg px-12 rounded-borderM">
          {/* content wrapper  */}
          <div className="flex flex-col">
            <h2 className=" mb-2 text-2xl font-bold text-white">
              Getir'i indirin!
            </h2>
            <span className=" font-semibold text-white">
              İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.
            </span>
            {/* platform images */}
            <div className="mt-9 flex gap-x-2 md:flex-col md:gap-y-2">
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

          {/* feature image  */}
          <img
            src="/images/features.png"
            alt="feature"
            className="absolute -right-4 bottom-0 h-72 xl:hidden"
          />
        </div>
      </div>
    </section>
  );
};
