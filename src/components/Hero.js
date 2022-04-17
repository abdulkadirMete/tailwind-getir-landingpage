import React, { useState } from "react";
import slideItems from "../data/banner.json";
import Slider from "react-slick";
import { sliderSettings } from "../data/options";
// Import css files for slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// phone input
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "../css/phoneNumber.css";

export const Hero = () => {
  const [phoneNumber, setPhoneNumber] = useState();

  return (
    <section id="hero" className="relative h-70v px-12">
      {/* content */}
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-between sm:flex-col sm:justify-center sm:space-y-6 sm:text-center">
        {/* left */}
        <div className=" z-30 flex flex-col justify-center space-y-12  sm:items-center sm:space-y-6">
          <img
            src="/images/hero-brand.svg"
            alt="hero-brand"
            className="h-44 w-44"
          />
          <h1 className="max-w-xs text-4xl font-semibold tracking-wide text-white">
            Dakikalar içinde kapınızda
          </h1>
        </div>

        {/* right */}
        <div className="z-30 flex w-100 flex-col space-y-4 rounded-borderM bg-white px-4 py-6">
          <span className="text-center text-lg font-semibold tracking-wide text-primaryViolet">
            Giriş yap veya kayıt ol
          </span>
          {/* phone input group */}
          <div className="flex space-x-2">
            <PhoneInput
              placeholder="Telefon Numarası"
              value={phoneNumber}
              onChange={() => setPhoneNumber(phoneNumber)}
            />
          </div>
          {/* button with number */}
          <button className="h-12 rounded-borderM bg-brandYellow font-semibold text-primaryViolet hover:bg-lightPrimary hover:text-paleWhite">
            Telefon numarası ile devam et
          </button>
        </div>
      </div>
      {/* filter */}
      <div className=" absolute top-0 left-0 z-20 h-full w-full bg-gradient-to-r from-sliderFilter to-transparent"></div>

      {/* slider */}
      <Slider
        {...sliderSettings}
        className="absolute  top-0 left-0 z-10 h-full w-full"
      >
        {slideItems.map((item) => {
          return (
            // slide item
            <img
              key={item.id}
              src={item.image}
              alt="slider"
              className="h-70v w-full  object-cover	 mix-blend-screen"
            ></img>
          );
        })}
      </Slider>
    </section>
  );
};
