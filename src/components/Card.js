import React from "react";
import cards from "../data/card.json";

export const Card = () => {
  return (
    <section id="card" className="bg-paleBackground">
      <div className="container mx-auto flex max-w-7xl p-12">
        {/* card container */}
        <div className="grid grid-cols-3 mx-auto gap-x-2 xl:grid-cols-2 md:grid-cols-1 xl:gap-y-8">
          {cards.map((card) => {
            {
              /* card item */
            }
            return (
              <div
                key={card.id}
                className="pt-16 pb-auto px-4  flex h-90 flex-col items-center space-y-3 bg-white text-center rounded-borderM shadow-md"
              >
                <img src={card.image} alt="card" className="h-36 w-36" />
                <span className="text-lg font-semibold text-primaryViolet">
                  {card.title}
                </span>
                <span className="text-secondaryTextColor">
                  {card.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
