"use client";
import { useEffect, useState } from "react";
import blogimages from "./blogimages"; // Import the JSON component
import Image from "next/image";

const Blog = () => {
    const [images, setImages] = useState<{ url: string; Master: string; Timing: string; Title: string }[]>([]);
    const [imagesyoga, setImagesYoga] = useState<{ url: string; Master: string; Timing: string; Title: string }[]>([]);

    useEffect(() => {
        // Set images from the blogimages component
        setImages(blogimages.images);
        setImagesYoga(blogimages.imagesyoga);
    }, []);

    return (
        <section id="blog" className="py-8">
            <br />
            <h2 className=" caveat text-3xl lg:text-4xl text-center text-yellow-600 font-bold mb-6">
                Indra Academy Routine Schedule Weekly
                <br />
                <span className="caveat font-serif text-yellow-600"> For Kids</span>
            </h2>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {images.map((image, index) => (
                        <div key={index} className="bg-white shadow-md p-4">
                            <Image
                                src={image.url} // Use the url from the JSON
                                alt={`Class: ${image.Title}`} // Provide unique alt text
                                width={500}
                                height={300}
                                className="w-full h-auto mb-4"
                            />
                            <h2 className="text-xl font-bold text-yellow-400 mb-2">{`Class: ${image.Title}`}</h2>
                            <h2 className="text-xl font-bold text-teal-400 mb-2">{`Master: ${image.Master}`}</h2>
                            <p className="text-gray-700">{`Timing: ${image.Timing}`}</p>
                        </div>
                    ))}
                </div>
            </div>
            <br /><br />
            <h2 className=" caveat text-3xl lg:text-4xl text-center text-yellow-600 font-bold mb-6">
                Indra Academy Routine Schedule Weekly
                <br />
                <span className="caveat font-serif text-yellow-600"> For Parents</span>
            </h2>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {imagesyoga.map((image, index) => (
                        <div key={index} className="bg-white shadow-md p-4">
                            <Image
                                src={image.url} // Use the url from the JSON
                                alt={`Class: ${image.Title}`} // Provide unique alt text
                                width={500}
                                height={300}
                                className="w-full h-auto mb-4"
                            />
                            <h2 className="text-xl font-bold text-yellow-400 mb-2">{`Class: ${image.Title}`}</h2>
                            <h2 className="text-xl font-bold text-teal-400 mb-2">{`Master: ${image.Master}`}</h2>
                            <p className="text-gray-700">{`Timing: ${image.Timing}`}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
