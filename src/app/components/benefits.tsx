import React from 'react';
import { Facilites } from './benefitsdata';
import Image from 'next/image';

const Benefits = () => {
  return (
    <section className="py-8 bg-green-50 caveat ">
      <div className="flex flex-col gap-3 container mx-auto">
                <h1 className="text-4xl font-bold text-[#C3340A] text-center" >Our Facilities</h1>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10 p-2 md:p-10">
                    {Facilites.sections.map((section, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <Image
                                className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
                                src={section.image}
                                alt={section.altText}
                                width={300}
                                height={200}
                            />
                            <h2 className="text-xl font-medium  text-gray-800 mb-2">
                                {section.title}
                            </h2>
                            <p className="text-gray-600 text-justify">
                                {section.description}
                            </p>
                        </div>
                    ))}
                </div>
                </div>
      
    </section>
  );
};

export default Benefits;
