import React from "react";
import categorys from "../data/categorys.json";

export const Categorys = () => {
  return (
    <section id="categorys">
      <div className="container mx-auto flex max-w-7xl flex-col p-12">
        {/* categorys wrapper */}
        <span className="font-semibold">Kategoriler</span>
        <div className="flex flex-wrap">
          {categorys.map((category) => {
            // category item
            return (
              <div
                key={category.id}
                className="mt-2 flex h-28 w-28 flex-col items-center space-y-2 pt-2 hover:bg-extraLightPrimary"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-12 w-12 rounded-borderM border-2 border-paleWhite object-cover"
                />
                <span className="font-semibold text-primaryTextColor">{category.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
