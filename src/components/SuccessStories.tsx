"use client";
import Image from "next/image";
import { useState } from "react";

import {
  lgOutlineKeyboardArrowLeft,
  lgOutlineKeyboardArrowRight,
} from "react-icons/lg";

import { GoDot, GoDotFill } from "react-icons/go";

const SuccessStories = () => {
  {
    /* CREATING AN ARRAY THAT HOLDS THE SLIDER INFORMATION */
  }
  const slides = [
    {
      name: "Jhon Kelaven",
      title: "Creative designer",
    },
    {
      name: "Leyton Mooney",
      title: "Lead Design Engineer",
    },
    {
      name: "Ayah Carson",
      title: "Lead Developer",
    },
  ];

  const [currentIndex, setcurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  };

  return (
    <div className="mt-[100px] group">
      <Image
        src="/element.png"
        width={160}
        height={200}
        className="absolute mt-10 hidden lg:block"
        alt="element_stories"
      />
      <div className="flex flex-row items-center justify-center gap-5 relative">
        {/* Left Arrow */}
        <lgOutlineKeyboardArrowLeft
          size={30}
          style={{ fill: "#8976FD" }}
          className="cursor-pointer hidden group-hover:block"
          onClick={prevSlide}
        />
        <div className="flex flex-col items-start">
          <h1 className="heading-text text-primary w-[300px]">
            See our success stories
          </h1>
          <p className="p-text text-third w-[300px] mt-5">
            Frontegg dramatically sped our go-to-market by cutting our up-front
            development time
          </p>
          <Image
            src="/mobile/mobile_audi.png"
            width={130}
            height={130}
            alt="mobile"
            className="block lg:hidden mt-5"
          />
          <p className="font-semibold mt-5 text-primary">
            {slides[currentIndex].name}
          </p>
          <p className="p-text text-third mt-2">{slides[currentIndex].title}</p>
        </div>
        {/* Dekstop Only */}
        <Image
          src="/Audiences.png"
          width={500}
          height={500}
          alt="audiences"
          className="hidden lg:block"
        />
        {/* Right Arrow */}
        <lgOutlineKeyboardArrowRight
          size={30}
          style={{ fill: "#8976FD" }}
          className="cursor-pointer hidden group-hover:block mr-5 lg:mr-0"
          onClick={nextSlide}
        />
      </div>
      {/* FIX ICONS MATCH WITH SLIDER NUMBER */}
      <div className="flex top-4 justify-center mt-5">
        <GoDotFill size={20} style={{ fill: "#8976FD" }} />
        <GoDot size={20} style={{ fill: "#8976FD" }} className="opacity-25" />
        <GoDot size={20} style={{ fill: "#8976FD" }} className="opacity-25" />
      </div>
    </div>
  );
};

export default SuccessStories;
