"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import homepageimages from "./homepageimages";
import Link from "next/link";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Header = () => {
  const [images, setImages] = useState<{ url: string; title: string }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set images from the homepageimages component
    setImages(homepageimages.images);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="w-full px-4  md:px-8 md:h-full bg-gradient-to-b from-yellow-100 via-yellow-150 to-yellow-0">
      <div className="py-12 md:py-24 container mx-auto flex flex-col items-center justify-between gap-6 md:gap-16 relative">

        {/* Left Hero Image */}
        <Image
          width={1000}
          height={1000}
          alt="hero1"
          src={"/heroboy1.png"}
          className="hidden md:block absolute left-0 top-[20%] w-[350px]"
        />

        {/* Right Hero Image */}
        <Image
          width={1000}
          height={1000}
          alt="hero2"
          src={"/heroboy2.png"}
          className="hidden md:block absolute right-0 top-[20%] w-[350px]"
        />

        {/* Center Text */}
        <div className="flex flex-col items-center justify-start gap-6 md:gap-8">
          <p className="text-2xl md:text-3xl font-bold text-gray-600 text-center">
            Welcome To
          </p>
          <p className="text-4xl md:text-6xl font-bold text-red-500 text-center">
            Indhra Institute of Training
          </p>
          <p className="text-sm md:text-lg text-gray-900 text-center px-4 md:px-0 md:w-3/5">
            Explore exciting learning opportunities for your children through
            our diverse classes, guided by expert instructors dedicated to
            nurturing creativity, knowledge, and personal growth.
          </p>
          <Link href={"#classes"}>
            <button className="px-6 py-3 rounded-full bg-yellow-500 text-white text-lg font-semibold hover:bg-teal-800">
              Explore Classes
            </button>
          </Link>

          {/* Image for small screens */}
          <Image
            width={1000}
            height={1000}
            alt="hero1"
            src={"/heroboy1.png"}
            className="w-[200px] h-auto md:hidden"
          />

          {/* Decorative Image for large screens */}
          <Image
            width={1000}
            height={1000}
            alt="dolls"
            src={"/dolls.png"}
            className="hidden md:block md:w-[200px] 2xl:w-[400px] h-auto"
          />
        </div>

        {/* Quote Section */}
        <div className="flex items-center justify-center gap-3">
          <ImQuotesLeft className="text-xl text-red-600" />
          <p className="text-xl md:text-2xl font-bold text-red-600 text-center">
            Activities Make <span className="text-yellow-600">Children</span> Great!
          </p>
          <ImQuotesRight className="text-xl text-red-600" />
        </div>

        {/* Stats Section */}
        <div className="w-full bg-gray-800 py-6 px-6 md:py-8 md:px-10 xl:px-20 rounded-full flex flex-row items-center justify-around gap-8 md:gap-10">
          <div className="text-center">
            <p className="text-2xl md:text-6xl text-white font-bold">6+</p>
            <p className="text-xl md:text-2xl mt-2 text-white">Classes</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-6xl text-white font-bold">10+</p>
            <p className="text-xl md:text-2xl mt-2 text-white">Masters</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-6xl text-white font-bold">50+</p>
            <p className="text-xl md:text-2xl mt-2 text-white">Students</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
