import React from "react";
import products from "../data/products.json";
import { BsPlusSquare } from "react-icons/bs";

export const Favorites = () => {
  return (
    <section id="favorites">
      <div className="container mx-auto mt-2 flex max-w-7xl flex-col space-y-2 p-12">
        <span className="font-semibold">Favoriler</span>
        <div className="grid grid-cols-8 text-center xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 xsm:grid-cols-3 xxsm:grid-cols-2 ">
          {products.map((product) => {
            // product item
            return (
              <div
                key={product.id}
                className="relative flex flex-col items-center justify-center border border-paleWhite p-2"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-20 w-20 object-cover"
                />

                {/* plus */}
                <BsPlusSquare className="absolute top-1 right-1 text-xl text-primaryViolet shadow-lg" />

                {/* info */}
                <div className="mb-auto mt-2 flex flex-col justify-center space-y-1">
                  <span className="font-semibold text-primaryViolet">{`₺${product.price}`}</span>
                  <span className="font-semibold text-primaryTextColor">
                    {product.title}
                  </span>
                  <span className="text-secondaryTextColor">{product.alt}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
