// "use client"
// import React, { useState, useMemo } from 'react';
// import { servicesData } from './servicesimages';

// const Services = () => {
//     const [activeTab, setActiveTab] = useState(servicesData[0].title);

//     const activeService = useMemo(() => servicesData.find(service => service.title === activeTab), [activeTab]);

//     return (
//         <section className="py-16">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 {/* Section title */}
//                 <h2 className="text-4xl font-bold text-center text-[#C3340A] mb-10">Our Classes</h2>

//                 {/* Tabs */}
//                 <div className="flex flex-wrap justify-center mb-8 space-x-4">
//                     {servicesData.map((service, index) => (
//                         <button
//                             key={index}
//                             className={`px-4 py-2 text-lg font-semibold transition-colors rounded-full ${
//                                 activeTab === service.title ? 'bg-teal-500 text-white' : 'bg-white text-teal-500'
//                             } hover:bg-teal-300`}
//                             onClick={() => setActiveTab(service.title)}
//                             aria-pressed={activeTab === service.title} // Accessibility improvement
//                         >
//                             {service.title}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Grid for subcategories */}
//                 <div  className="flex flex-wrap justify-center gap-14">
//                     {activeService?.subcategories.map((subcategory, index ) => (
//                         <div  key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
//                             {/* Set fixed height for the image container */}
//                             <div className="h-56 w-[350px]">
//                                 <img
//                                     src={subcategory.imageUrl}
//                                     alt={`${subcategory.name} class image`}
//                                     className="w-full h-full object-cover" // Ensure the image covers the entire container
//                                     loading="lazy" // Improve performance
//                                 />
//                             </div>
//                             <div className="p-6">
//                                 <h3 className="text-2xl font-semibold text-[#344aac] mb-3">{subcategory.name}</h3>
//                                 <p className="text-gray-600">{subcategory.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Services;


"use client";
import React, { useState, useMemo } from 'react';
import { servicesData } from './servicesimages';
import Image from 'next/image';

const Services = () => {
    const [activeTab, setActiveTab] = useState(servicesData[0].title);

    const activeService = useMemo(() => 
        servicesData.find(service => service.title === activeTab), 
        [activeTab]
    );

    return (
        <section id='classes' className="pb-16 pt-28 mt-20 relative">
                            <Image className='hidden lg:block w-full h-screen opacity-15  absolute top-[100px] -z-10' width={1000} height={1000} alt='bg1' src={"/bg1.png"} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative ">
                {/* Section title */}
                <h2 className="text-4xl font-bold text-center text-red-500 mb-10">Our Classes</h2>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center mb-8 space-x-4">
                    {servicesData.map((service, index) => (
                        <button
                            key={index}
                            className={`px-4 py-2 text-lg font-semibold transition-colors rounded-full ${
                                activeTab === service.title ? 'bg-yellow-300 lg:text-white' : 'bg-white text-yellow-500 hover:bg-yellow-100'
                            } `}
                            onClick={() => setActiveTab(service.title)}
                            aria-pressed={activeTab === service.title}
                        >
                            {service.title}
                        </button>
                    ))}
                </div>

                {/* Grid for subcategories */}
                <div className="flex flex-wrap justify-center gap-14">
                    {activeService?.subcategories.map((subcategory, index) => (
                        <div key={index} className="w-[350px] bg-white rounded-lg shadow-lg overflow-hidden">
                            <Image
                                    src={subcategory.imageUrl}
                                    alt={`${subcategory.name} class image`}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-56 object-cover" // Ensure the image covers the entire container
                                    loading="lazy" // Improve performance
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
