"use client";
import { useEffect, useState } from "react";
import Image from "next/image"; // Keep this import for your image component
import homepageimages from "./homepageimages";

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
    <div className="relative h-96 w-full lg:h-screen lg:w-full overflow-hidden">
      {/* Image Background Slider */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          style={{
            backgroundImage: `url(${image.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      ))}

      {/* Fixed Text Section */}
      <div className="absolute inset-0 flex justify-center lg:items-center lg:justify-start h-full w-full text-white p-32 z-20">
        <div>
          <h2 className="text-lg text-center text-white font-bold lg:text-start lg:text-3xl">
            Welcome To
            <br /><br />
            <span className="caveat lg:block text-3xl w-96 lg:w-auto font-black bg-gradient-to-r from-teal-500 to-yellow-500 bg-clip-text text-transparent lg:text-7xl">
              {/* Display the title of the currently displayed image */}
              {images.length > 0 ? images[currentIndex].title : ""}
            </span>
          </h2>
          <br /><br />
          {/* Optional Button */}
          {/* <button className="bg-yellow-300 text-black lg:ml-0 justify-center text-lg lg:text-2xl ml-24 h-10 w-48 lg:h-16 lg:w-56 border rounded-full ">
                        Explore More
                    </button> */}
        </div>
      </div>

      {/* Arrow Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-600"
        onClick={prevImage}
      >
        &lt; {/* Left arrow */}
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-600"
        onClick={nextImage}
      >
        &gt; {/* Right arrow */}
      </button>
    </div>
  );
};

export default Header;
