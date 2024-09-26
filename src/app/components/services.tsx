"use client";
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { servicesData } from './servicesimages';
import Image from 'next/image';

const Services = () => {
  const [activeTab, setActiveTab] = useState<string>(servicesData[0].title);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const activeService = useMemo(
    () => servicesData.find((service) => service.title === activeTab),
    [activeTab]
  );


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const visibleSection = entry.target.getAttribute("data-title");
            if (visibleSection) {
              setActiveTab(visibleSection); // Set active tab based on the visible section
            }
          }
        });
      },
      {
        threshold: 0.5, // Adjust threshold for visibility
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleScrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    setActiveTab(servicesData[index].title); // Update active tab on click
  };


    return (
        <section id='classes' className="pb-16 pt-28 mt-20 relative">
            <Image className='hidden lg:block w-full h-screen opacity-15  absolute top-[100px] -z-10' width={1000} height={1000} alt='bg1' src={"/bg1.png"} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        <h2 className="text-4xl font-bold text-center text-[#C3340A] mb-10">Our Classes</h2>

        {/* Tabs for Desktop */}
        <div className="hidden md:flex flex-wrap justify-center mb-8 space-x-4">
          {servicesData.map((service, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-lg font-semibold transition-colors rounded-full ${activeTab === service.title ? 'bg-teal-500 text-white' : 'bg-white text-teal-500'} hover:bg-teal-300`}
              onClick={() => setActiveTab(service.title)}
              aria-pressed={activeTab === service.title}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Scrollable Container for Subcategories (Mobile) */}
        <div className='flex md:hidden flex-row gap-2'>
        <div className="overflow-y-auto h-[60vh] relative">
          <div className="flex flex-col gap-10">
            {servicesData.map((service, index) => (
              <div
                key={index}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                data-title={service.title}
                className={`w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center`}
              >
                <h3 className="text-xl font-bold text-[#C3340A] text-center mb-4">{service.title}</h3>
                {service.subcategories.map((subcategory, subIndex) => (
                  <div key={subIndex} className="w-[350px] mb-6">
                    <Image
                      src={subcategory.imageUrl}
                      alt={`${subcategory.name} class image`}
                      width={1000}
                      height={1000}
                      className="w-full h-56 object-cover"
                      loading="lazy"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-[#C3340A]">{subcategory.name}</h3>
                      <p className="mt-2 text-gray-600">{subcategory.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0); }
                }
                .animate-scroll {
                    animation: scroll 0.5s ease-in-out forwards;
                }

                /* Custom Scrollbar Styles */
                ::-webkit-scrollbar {
                    width: 10px;
                }
                ::-webkit-scrollbar-track {
                    background: transparent;
                }
                ::-webkit-scrollbar-thumb {
                    background-color: #4c9e9a; /* Change to match your theme */
                    border-radius: 10px; /* Curve the scrollbar ball */
                    border: 2px solid transparent; /* Adjust thickness */
                }
                ::-webkit-scrollbar-thumb:hover {
                    background-color: #3b7875; /* Darker on hover */
                }
            `}</style>
        
          {/* Button to Change Active Tab for Mobile */}
          <div className="flex flex-col gap-2 justify-center items-center">
          {servicesData.map((service, index) => (
            <button
              key={index}
              className={`w-8 h-8 flex justify-center items-center rounded-full transition-transform duration-300 ease-in-out 
                ${activeTab === service.title ? 'bg-teal-500 text-white transform scale-110' : 'bg-teal-100'}`}
              onClick={() => handleScrollToSection(index)} // Scroll to the respective section
              aria-pressed={activeTab === service.title}
            >
              {service.title[0]}
            </button>
            ))}
          </div>
        </div>

        {/* Card Container for Desktop View */}
        <div className="hidden lg:flex flex-wrap justify-center gap-14 p-4">
          {activeService?.subcategories.map((subcategory, index) => (
            <div key={index} className="w-[350px] bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={subcategory.imageUrl}
                alt={`${subcategory.name} class image`}
                width={1000}
                height={1000}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#C3340A]">{subcategory.name}</h3>
                <p className="mt-2 text-gray-600">{subcategory.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
        </section>
    );
};

export default Services;
