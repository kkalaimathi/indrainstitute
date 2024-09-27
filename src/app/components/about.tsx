"use client"; import { useEffect, useState } from "react";
import aboutusimages from "./aboutimages";
import Image from "next/image";

interface Image {
    url: string;
}

const Aboutus = () => {

    const [images, setImages] = useState<Image[]>([]);

    useEffect(() => {

        setImages(aboutusimages.images);
    }, []);

    return (
        <section id="about" className="bg-yellow-50 py-8 md:py-16"><br />
                <h2 className="text-4xl font-bold text-center text-red-500 mb-10 md:mb-20">About Us</h2>
                <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
                    <div className="flex md:w-1/2 flex-wrap items-center justify-center gap-4">  
                        <Image src={"/aboutimg.png"} width={1000} height={1000} alt="image1" className="w-[600px] h-auto rounded-xl"/>
                     </div>
                     <div className="flex md:w-1/2 flex-col items-start justify-center md:gap-4 p-5">  
                     <h2 className="text-sm text-black bg-[#f3e990] w-32 p-1 text-center font-bold mb-4">Hello Everyone</h2>
                     <h2 className="md:text-4xl text-2xl text-justify text-teal-600 font-bold mb-4">Welcome to Indra Insititute Training.</h2>
                                <p className="text-base md:text-xl text-justify font-serif text-gray-500">
                                    Indra Insititute Training is a specialized institution focused on teaching various forms and styles of dance. These academies offer structured dance education programs that cater to different skill levels, from beginners to advanced performers. The curriculum often includes a range of dance styles such as ballet, contemporary, hip-hop, jazz, classical, and folk dances, allowing students to explore diverse techniques and cultural expressions.
                                    <br /><br /><br />In a dance academy, students receive guidance from professional instructors and choreographers, learning not only the physical aspects of dance—such as movement, coordination, balance, and rhythm—but also the theoretical and artistic elements, including choreography, stage presence, and expression.

                                </p>
                    </div>


                {/* <div className="md:grid md:grid-cols-2 gap-4 mt-8">
                    <div className="grid grid-cols-2 gap-4 p-4">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="bg-cover bg-center flex rounded-lg md:w-80 md:h-72 sm:h-80 md:h-96 w-full h-64"
                                style={{ backgroundImage: `url(${image.url})` }} // Adjust height as needed
                            >
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-start p-4 space-y-4 w-full">
                        <div className="flex items-center mt-20 ">
                            <div>
                                <h2 className="text-sm text-black bg-[#f3e990] w-32 p-1 text-center font-bold mb-4">Hello Everyone</h2>
                                <h2 className="md:text-4xl text-2xl text-justify text-teal-600 font-bold mb-4">Welcome to Indra Insititute Training.</h2>
                                <p className="text-base md:text-xl text-justify font-serif text-gray-500">
                                    Indra Insititute Training is a specialized institution focused on teaching various forms and styles of dance. These academies offer structured dance education programs that cater to different skill levels, from beginners to advanced performers. The curriculum often includes a range of dance styles such as ballet, contemporary, hip-hop, jazz, classical, and folk dances, allowing students to explore diverse techniques and cultural expressions.
                                    <br /><br /><br />In a dance academy, students receive guidance from professional instructors and choreographers, learning not only the physical aspects of dance—such as movement, coordination, balance, and rhythm—but also the theoretical and artistic elements, including choreography, stage presence, and expression.

                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-11 p-4">
                            <div className="flex flex-col">
                                <h3 className="text-xl text-teal-600 text-center md:text-left  font-bold mb-4">Dance Certification Programs</h3>
                                <p className="text-base md:text-lg  text-gray-500 font-serif w-full">Formal dance education that leads to certification, allowing dancers to pursue dance as a career or qualify for advanced programs.Participation in graded dance exams, often accredited by recognized dance bodies, validating skill levels.</p>
                            </div>

                            <div className="flex flex-col ">
                                <h3 className="text-xl text-teal-600 text-center md:text-left font-bold mb-4">Choreography & Performance Workshops</h3>
                                <p className="text-lg  text-gray-500 font-serif w-full">Teaching students how to create and compose dance routines, blending music with movement.Prepares students for live shows, recitals, and competitions, emphasizing stage presence, timing, and teamwork.</p>
                            </div>
                        </div>

                    </div>
                </div> */}
            </div>
        </section>

    );
};

export default Aboutus;
