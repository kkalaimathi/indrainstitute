import React from 'react';

// Define the service images data
const serviceImages = [
    { title: "Dance", description: "Learn various dance forms." },
    { title: "Music", description: "Explore music theory and practice." },
    { title: "Sports", description: "Join our sports programs." },
    { title: "Computer", description: "Master computer skills." },
    { title: "Tuition", description: "Personalized tutoring services." },
];

const Services = () => {
    return (
        <section className="py-8 bg-yellow-50">
            <h2 className="caveat text-2xl lg:text-7xl text-center text-black font-bold mb-6">Our Services</h2>
            <div className="container mx-auto flex flex-col items-center">
                {/* First Row with 5 Circular Columns */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
                    {serviceImages.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-6 bg-white shadow-lg transition-transform transform hover:scale-105 rounded-full"
                            style={{ width: '150px', height: '150px' }} // Adjust size as needed
                        >
                            <h3 className="text-xl text-teal-600 font-semibold mb-2 text-center">{service.title}</h3>
                            <p className="text-sm text-gray-700 text-center">{service.description}</p>
                        </div>
                    ))}
                </div>

                {/* Second Row with 3 Columns */}
                <h2 className="text-4xl text-center text-red-600 font-bold mb-6">Announcements:</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg transition-transform transform hover:scale-105"
                        style={{ borderTopLeftRadius: '1rem', borderBottomRightRadius: '1rem' }}>
                        <h3 className="text-2xl text-teal-600 font-semibold mb-2">Enroll In Season 24-25</h3>
                        <p className="text-lg text-gray-700"></p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg transition-transform transform hover:scale-105"
                        style={{ borderTopLeftRadius: '1rem', borderBottomRightRadius: '1rem' }}>
                        <h3 className="text-2xl text-teal-600 font-semibold mb-2">Learn About Adult Program</h3>
                        <p className="text-lg text-gray-700">.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg transition-transform transform hover:scale-105"
                        style={{ borderTopLeftRadius: '1rem', borderBottomRightRadius: '1rem' }}>
                        <h3 className="text-2xl text-teal-600 font-semibold mb-2">Sign Up For Free Trail class</h3>
                        <p className="text-lg text-gray-700"></p>
                    </div>
                </div>
            </div>
        </section>
    );
};



export default Services;
