import React from "react";
import campaigns from "../data/campaigns.json";

export const Campaings = () => {
  return (
    <section id="campaigns" className="bg-paleBackground">
      <div className="container mx-auto flex max-w-7xl flex-col space-y-2 p-12  md:items-center md:space-y-12">
        <span className="font-semibold">Kampanyalar</span>
        <div className="flex gap-x-2 md:flex-col md:gap-y-8">
          {campaigns.map((campaign) => {
            return (
              <img
                key={campaign.id}
                src={campaign.image}
                alt={campaign.alt}
                className="w-100 rounded-borderM"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
