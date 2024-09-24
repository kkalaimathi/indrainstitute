import React from 'react';
import benefitsData from './benefitsdata';

const Benefits = () => {
  return (
    <section className="py-8 bg-green-50 caveat">
      <h2 className="lg:text-7xl text-2xl text-center text-black mb-8">Our Benefits</h2>
      <div className="container mx-auto">
        {/* Flexbox layout to display in a single row */}
        <div className="flex flex-wrap justify-center gap-6">
          {benefitsData.images.map((benefit, index) => {
            const IconComponent = benefit.icon; // Dynamically getting the icon

            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-green-200 via-white to-green-200 shadow-lg transition-transform transform hover:scale-105"
                style={{
                  borderTopLeftRadius: '1rem',
                  borderBottomRightRadius: '1rem',
                  minWidth: '250px', // Adjusts the card width
                }}
              >
                {/* Render the corresponding icon */}
                <div className="w-16 h-16 mb-4 flex items-center justify-center bg-teal-500 rounded-full text-white text-xl">
                  <IconComponent  /> {/* Correctly pass the size prop */}
                </div>
                <p className="text-lg text-teal-700 mb-4 text-center">{benefit.description}</p>
              </div>
              
            );
          })}
        <p>Indra Institute of Training</p>
        </div>
      </div>
      
    </section>
  );
};

export default Benefits;
