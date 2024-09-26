"use client";
import { useEffect, useState } from "react";
import Image from "next/image"; // Keep this import for your image component
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

  // Change the index every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images]);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    // <div className="relative h-96 w-full lg:h-screen lg:w-full overflow-hidden ">
    //   {images.map((image, index) => (
    //     <div
    //       key={index}
    //       className={`opacity-50 absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
    //         }`}
    //       style={{
    //         backgroundImage: `url(${image.url})`,
    //         backgroundSize: 'cover',
    //         backgroundPosition: 'center',
    //       }}
    //     ></div>
    //   ))}

    //   <div className="w-full h-screen bg-black  absolute top-0"/>

    //   <div className="absolute inset-0 flex justify-center lg:items-center lg:justify-start h-full w-full text-white p-32 z-20">
    //     <div>
    //       <h2 className="text-lg text-center text-white font-bold lg:text-start lg:text-3xl">
    //         Welcome To
    //         <br /><br />
    //         <span className=" lg:block text-3xl w-96 lg:w-auto font-black text-white lg:text-7xl">
    //           {/* Display the title of the currently displayed image */}
    //           {images.length > 0 ? images[currentIndex].title : ""}
    //         </span>
    //       </h2>
    //       <br /><br />
    //       Optional Button
    //       <button className="bg-yellow-300 text-black lg:ml-0 justify-center text-lg lg:text-2xl ml-24 h-10 w-48 lg:h-16 lg:w-56 border rounded-full ">
    //                     Explore More
    //                 </button>
    //     </div>
    //   </div>

    //   Arrow Buttons
    //   <button
    //     className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-600"
    //     onClick={prevImage}
    //   >
    //     &lt; Left arrow
    //   </button>
    //   <button
    //     className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-600"
    //     onClick={nextImage}
    //   >
    //     &gt; Right arrow
    //   </button>
    // </div>
    <div className="w-full px-8 h-screen bg-gradient-to-b from-yellow-100 via-yellow-150 to-yellow-0">
      <div className="p-32 lg:p-40 h-full lg:h-screen container mx-auto flex flex-col items-center justify-between gap-6 relative">

        {/* Left Hero Image */}
        <Image
          width={1000}
          height={1000}
          alt="hero1"
          src={"/heroboy1.png"}
          className="hidden lg:block  absolute left-0 w-[250px] lg:w-[500px] h-auto bottom-[300px]  lg:bottom-[150px]"
        />


        {/* Right Hero Image */}
        <Image
          width={1000}
          height={1000}
          alt="hero2"
          src={"/heroboy2.png"}
          className="hidden lg:block absolute right-0 w-[180px] lg:w-[480px] h-auto bottom-[500px] lg:bottom-[150px]"
        />

        {/* Center Text */}
        <div className="flex flex-col items-center justify-start gap-6">
          <p className=" text-3xl -mt-14 w-screen  lg:text-3xl font-bold text-gray-600 text-center ">
            Welcome To</p>
          <p className="text-3xl -mt-4 w-screen  lg:text-6xl font-bold text-center  text-red-500 px-2 py-4 ">Indhra Institute of Training </p>

          <p className="text-sm lg:text-lg text-gray-900 text-center px-3 lg:px-0  lg:w-2/4 ">
            Explore exciting learning opportunities for your children through our diverse classes, guided by expert instructors dedicated to nurturing creativity, knowledge, and personal growth.
          </p>
          <Link href={"#classes"}>
            <button className="px-6 py-3 mt- rounded-full  bg-yellow-500 text-white text-lg font-semibold hover:bg-teal-800">
              Explore Classes
            </button>
          </Link>

          <Image
            width={1000}
            height={1000}
            alt="hero1"
            src={"/heroboy1.png"}
            className="   w-[300px]  h-auto lg:hidden"
          />
            <Image
              width={1000}
              height={1000}
              alt="hero1"
              src={"/dolls.png"}
              className=" hidden  w-[400px]  h-auto lg:block"
            />
        </div>

        <div className="flex items-start justify-center gap-3 -mt-12">
          <ImQuotesLeft className="text-xl text-red-600" />
          <p className=" text-3xl lg:text-3xl font-bold text-gray-600 text-center ">Activities Make <span className="caveat text-red-600">Children </span>Great !</p>
          <ImQuotesRight className="text-xl text-red-600" />
        </div>


      
        
          {/* Stats Section */}
          <div className="w-full bg-gray-800 h-20  py-24  rounded-full flex items-center justify-center gap-10 lg:gap-60">
            <div className="text-center ">
              <p className="text-6xl text-white font-bold">6+</p>
              <p className="text-2xl mt-4 text-white">Classes</p>
            </div>
            <div className="text-center">
              <p className="text-6xl text-white font-bold">10+</p>
              <p className="text-2xl mt-4 text-white">Masters</p>
            </div>
            <div className="text-center">
              <p className="text-6xl text-white font-bold">50+</p>
              <p className="text-2xl mt-4 text-white">Students</p>
            </div>
          </div>
      
      </div>
    </div>
  );
};

export default Header;
