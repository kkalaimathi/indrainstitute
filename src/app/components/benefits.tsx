import React from 'react';
import { Facilites } from './benefitsdata';
import Image from 'next/image';

const Benefits = () => {
  return (
    <section id='facilities' className="py-24 px-8  mb-10 ">
      <div className="flex flex-col gap-3 container mx-auto">
                <h1 className="text-4xl font-bold text-red-500 text-center mb-10" >Our Facilities</h1>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 p-2 md:p-10">
                    {Facilites.sections.map((section, index) => (
                        <div key={index} className="flex flex-col items-start text-center hover:scale-110 hover:bg-teal-50 p-4 rounded-xl group hover:shadow-lg">
                            <Image
                                className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
                                src={section.image}
                                alt={section.altText}
                                width={300}
                                height={200}
                            />
                            <h3 className="text-xl font-normal  text-gray-800 mb-2 group-hover:text-teal-500 ">
                                {section.title}
                            </h3>
                            <p className="text-gray-600 text-sm text-justify">
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
