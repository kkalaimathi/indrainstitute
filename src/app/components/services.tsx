// "use client";
// import React, { useState, useMemo, useRef, useEffect } from 'react';
// import { servicesData } from './servicesimages';
// import Image from 'next/image';

// const Services = () => {
//   const [activeTab, setActiveTab] = useState<string>(servicesData[0].title);
//   const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

//   const activeService = useMemo(
//     () => servicesData.find((service) => service.title === activeTab),
//     [activeTab]
//   );


//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const visibleSection = entry.target.getAttribute("data-title");
//             if (visibleSection) {
//               setActiveTab(visibleSection); // Set active tab based on the visible section
//             }
//           }
//         });
//       },
//       {
//         threshold: 0.5, // Adjust threshold for visibility
//       }
//     );

//     sectionRefs.current.forEach((section) => {
//       if (section) observer.observe(section);
//     });

//     return () => {
//       sectionRefs.current.forEach((section) => {
//         if (section) observer.unobserve(section);
//       });
//     };
//   }, []);

//   const handleScrollToSection = (index: number) => {
//     sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
//     setActiveTab(servicesData[index].title); // Update active tab on click
//   };


//     return (
//         <section id='classes' className="pt-5 md:pt-28  relative">
//             <Image className='hidden md:block w-full h-screen opacity-15  absolute top-[100px] -z-10' width={1000} height={1000} alt='bg1' src={"/bg1.png"} />

//             <div className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-col">
//         <h2 className="text-4xl font-bold text-center text-[#C3340A] mb-10">Our Classes</h2>

//         {/* Tabs for Desktop */}
//         <div className="hidden md:flex flex-wrap justify-center mb-8 space-x-4">
//           {servicesData.map((service, index) => (
//             <button
//               key={index}
//               className={`px-4 py-2 text-lg font-semibold transition-colors rounded-full ${activeTab === service.title ? 'bg-teal-500 text-white' : 'bg-white text-teal-500'} hover:bg-teal-300`}
//               onClick={() => setActiveTab(service.title)}
//               aria-pressed={activeTab === service.title}
//             >
//               {service.title}
//             </button>
//           ))}
//         </div>

//         {/* Scrollable Container for Subcategories (Mobile) */}
//         <div className='flex md:hidden flex-row gap-2 justify-center p-5'>
//         <div className="overflow-y-auto h-[60vh] relative">
//           <div className="flex flex-col gap-10">
//             {servicesData.map((service, index) => (
//               <div
//                 key={index}
//                 ref={(el) => {
//                   sectionRefs.current[index] = el;
//                 }}
//                 data-title={service.title}
//                 className={`w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center`}
//               >
//                 <h3 className="text-xl font-bold text-[#C3340A] text-center mb-4">{service.title}</h3>
//                 {service.subcategories.map((subcategory, subIndex) => (
//                   <div key={subIndex} className="w-[250px] mb-6">
//                     <Image
//                       src={subcategory.imageUrl}
//                       alt={`${subcategory.name} class image`}
//                       width={1000}
//                       height={1000}
//                       className="w-full h-56 object-cover"
//                       loading="lazy"
//                     />
//                     <div className="p-4">
//                       <h3 className="text-xl font-semibold text-[#C3340A]">{subcategory.name}</h3>
//                       <p className="mt-2 text-gray-600">{subcategory.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//         <style jsx>{`
//                 @keyframes scroll {
//                     0% { transform: translateY(0); }
//                     50% { transform: translateY(-10px); }
//                     100% { transform: translateY(0); }
//                 }
//                 .animate-scroll {
//                     animation: scroll 0.5s ease-in-out forwards;
//                 }

//                 /* Custom Scrollbar Styles */
//                 ::-webkit-scrollbar {
//                     width: 10px;
//                 }
//                 ::-webkit-scrollbar-track {
//                     background: transparent;
//                 }
//                 ::-webkit-scrollbar-thumb {
//                     background-color: #4c9e9a; /* Change to match your theme */
//                     border-radius: 10px; /* Curve the scrollbar ball */
//                     border: 2px solid transparent; /* Adjust thickness */
//                 }
//                 ::-webkit-scrollbar-thumb:hover {
//                     background-color: #3b7875; /* Darker on hover */
//                 }
//             `}</style>
        
//           {/* Button to Change Active Tab for Mobile */}
//           <div className="flex flex-col gap-2 justify-center items-center">
//           {servicesData.map((service, index) => (
//             <button
//               key={index}
//               className={`w-8 h-8 flex justify-center items-center rounded-full transition-transform duration-300 ease-in-out 
//                 ${activeTab === service.title ? 'bg-teal-500 text-white transform scale-110' : 'bg-teal-100'}`}
//               onClick={() => handleScrollToSection(index)} 
//               aria-pressed={activeTab === service.title}
//             >
//               {service.title[0]}
//             </button>
//             ))}
//           </div>
//         </div>

//         {/* Card Container for Desktop View */}
//         <div className="hidden md:flex flex-wrap justify-center gap-14 p-4">
//           {activeService?.subcategories.map((subcategory, index) => (
//             <div key={index} className="w-[350px] bg-white rounded-lg shadow-lg overflow-hidden">
//               <Image
//                 src={subcategory.imageUrl}
//                 alt={`${subcategory.name} class image`}
//                 width={1000}
//                 height={1000}
//                 className="w-full h-56 object-cover"
//                 loading="lazy"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold text-[#C3340A]">{subcategory.name}</h3>
//                 <p className="mt-2 text-gray-600">{subcategory.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//         </section>
//     );
// };

// export default Services;









"use client";
import React, { useState, useMemo, useRef, useEffect } from 'react';
import Image from 'next/image';

const Services = () => {
  const [activeTab, setActiveTab] = useState<string>("Music");
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null); // Reference to the scrollable container

  const servicesData = [
    {
      title: "Music",
      id: "music",
      description: "Explore music theory and practice.",
      subcategories: [
        { name: "Keyboard", description: "Learn to play various instruments.", imageUrl: "/keyboard.png" },
        { name: "Piano", description: "Improve your singing skills.", imageUrl: "/piano.png" },
        { name: "Guitar", description: "Deepen your understanding of music theory.", imageUrl: "/guitar.png" },
        { name: "Drums", description: "Deepen your understanding of music theory.", imageUrl: "/drums.png" },
        { name: "Miruthangam", description: "Deepen your understanding of music theory.", imageUrl: "/miruthangam.png" },
        { name: "Violin", description: "Deepen your understanding of music theory.", imageUrl: "/violin.png" }
      ]
    },
    {
      title: "Dance",
      id: "dance",
      description: "Explore various dance forms.",
      subcategories: [
        { name: "Western", description: "Learn modern dance styles.", imageUrl: "/western.png" },
        { name: "Folk", description: "Dive into traditional dance.", imageUrl: "/folk.png" },
        { name: "Classical", description: "Master classical dance forms.", imageUrl: "/classical.png" }
      ]
    },
    {
      title: "Sports",
      id: "sports",
      description: "Join our sports programs.",
      subcategories: [
        { name: "Football", description: "Learn football tactics and skills.", imageUrl: "/football.png" },
        { name: "Badminton", description: "Become a pro at badminton.", imageUrl: "/badminton.png" },
        { name: "Cricket", description: "Master the game of cricket.", imageUrl: "/cricket.png" },
        { name: "Karate", description: "Master the game of cricket.", imageUrl: "/karate.png" },
        { name: "Judo", description: "Master the game of cricket.", imageUrl: "/judo.png" },
        { name: "Silambam", description: "Master the game of cricket.", imageUrl: "/silambam.jpeg" },
        { name: "Carom", description: "Master the game of cricket.", imageUrl: "/carom.png" },
        { name: "Chess", description: "Master the game of cricket.", imageUrl: "/chess.png" },
        { name: "Tennis", description: "Master the game of cricket.", imageUrl: "/tennis.png" },
        { name: "Martial Art", description: "Master the game of cricket.", imageUrl: "/martial.png" },
        { name: "Table Tennis", description: "Master the game of cricket.", imageUrl: "/tableTennis.png" },
        { name: "Air Hockey", description: "Master the game of cricket.", imageUrl: "/airhockey.png" }
      ]
    },
    {
      title: "Computer",
      id: "computer",
      description: "Master computer skills.",
      subcategories: [
        { name: "Computer", description: "Learn computer in various languages.", imageUrl: "/computerkid.png" }
      ]
    },
    {
      title: "Tuition",
      description: "Personalized tutoring services.",
      subcategories: [
        { name: "Matriculation", description: "Improve your matriculation skills.", imageUrl: "/matriculation.png" },
        { name: "CBSC Syllabus", description: "Master physics, chemistry, and biology.", imageUrl: "/cbsc.png" },
        { name: "Hindi", description: "Learn Hindi with ease.", imageUrl: "/hindi.png" },
        { name: "French", description: "Learn French with ease.", imageUrl: "/french.png" },
        { name: "German", description: "Learn German with ease.", imageUrl: "/german.png" },
        { name: "Handwriting", description: "Learn handwriting with ease.", imageUrl: "/handwriting.png" }
      ]
    },
    {
      title: "Yoga",
      description: "Find balance with yoga and meditation.",
      subcategories: [
        { name: "Yoga", description: "Flow through dynamic yoga sequences.", imageUrl: "/yoga.png" },
        { name: "Meditation", description: "Calm your mind with meditation techniques.", imageUrl: "/meditation.jpg" }
      ]
    }
  ];

  const activeService = useMemo(() => servicesData.find((service) => service.title === activeTab), [activeTab]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const visibleSection = entry.target.getAttribute("data-title");
            if (visibleSection) {
              setActiveTab(visibleSection);
            }
          }
        });
      },
      { threshold: 0.5 }
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
    if (scrollContainerRef.current) {
      const sectionElement = sectionRefs.current[index];
      if (sectionElement) {
        const containerScrollTop = scrollContainerRef.current.scrollTop;
        const sectionOffsetTop = sectionElement.getBoundingClientRect().top + containerScrollTop;
        scrollContainerRef.current.scrollTo({ top: sectionOffsetTop, behavior: 'smooth' });
      }
      setActiveTab(servicesData[index].title);
    }
  };

  return (
    <section id="classes" className="pt-5 md:pt-28 relative">
      <Image className="hidden md:block w-full h-auto opacity-15 absolute top-[100px] -z-10" width={1000} height={1000} alt="bg1" src="/bg1.png" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-col">
        <h2 className="text-4xl font-bold text-center text-[#C3340A] mb-10">Our Classes</h2>



        <div className="hidden md:flex flex-wrap justify-center mb-8 space-x-4">
          {servicesData.map((service, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-lg font-semibold transition-colors rounded-full ${activeTab === service.title ? 'bg-[#FFBB32] text-white' : 'bg-white text-teal-500'} hover:bg-[#c28f29] hover:text-white`}
              onClick={() => setActiveTab(service.title)}
              aria-pressed={activeTab === service.title}
            >
              {service.title}
            </button>
          ))}
        </div>
        {/* Tabs for Desktop */}
        <div className="hidden md:flex flex-wrap justify-center gap-14 p-4">
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
        {/* Scrollable Container for Subcategories (Mobile) */}
        <div className="flex md:hidden flex-row gap-2 justify-center ">
          <div ref={scrollContainerRef} className="overflow-y-auto h-[60vh] relative ">
            <div className="flex flex-col gap-10">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    sectionRefs.current[index] = el;
                  }}
                  data-title={service.title}
                  className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-2"
                >
                  <h3 className="text-xl font-bold text-[#C3340A] text-center mb-4">{service.title}</h3>
                  {service.subcategories.map((subcategory, subIndex) => (
                    <div key={subIndex} className="w-[250px] mb-6">
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
                    width: 5px;
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

          {/* Scroll Buttons (Mobile) */}
          <div className="flex flex-col justify-center">
            {servicesData.map((service, index) => (
              <button
                key={index}
                onClick={() => handleScrollToSection(index)}
                className={`mb-4 p-2 flex justify-center items-center rounded-full transition-transform duration-300 ease-in-out 
                               ${activeTab === service.title ? 'bg-[#b68627] text-white' : 'bg-[#ffb92ed5] text-white'}`}
              >
              {service.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
