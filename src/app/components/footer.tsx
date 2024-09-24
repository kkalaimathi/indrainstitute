import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-yellow-500 text-teal-600 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h1 className="text-2xl lg:text-4xl font-bold caveat">Indra Insiti  tute Of Training</h1>
                        <p className="text-sm text-red-500">Your gateway to knowledge and skills.</p>
                    </div>
                    <br />
                    <nav className="mb-4 md:mb-0 caveat">
                        <ul className="flex space-x-4 text-base lg:text-2xl font-bold">
                            <li>
                                <Link href="#home" className="hover:text-green-500 transition">Home</Link>
                            </li>
                            <li>
                                <Link href="#about" className="hover:text-green-500 transition">About</Link>
                            </li>
                            <li>
                                <Link href="#services" className="hover:text-green-500 transition">Services</Link>
                            </li>
                            <li>
                                <Link href="#contact" className="hover:text-green-500 transition">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex space-x-4 caveat">
                        <a href="#" className="text-green-500 hover:text-white transition hover:underline">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-green-500 hover:text-white transition hover:underline">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-green-500 hover:text-white transition hover:underline">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>


                </div><br />

                {/* Address Section */}
                <div className="text-center md:text-left mb-4 font-bold md:mb-0">
                    <p className="text-base text-white">3rd Floor Chathriya Towers,</p>
                    <p className="text-base text-white">No.1 Tollgate, Trichy-621216</p>
                </div>

                {/* Contact Information Section */}
                <div className="text-center md:text-left font-bold mb-4 md:mb-0">
                    <p className="text-base text-white flex items-center">
                        <FaPhone className="mr-2 transform rotate-90" /> {/* Phone Icon */}
                        Call: +91 93609-07074, +91 936090-7075
                    </p>
                    <p className="text-base text-white flex items-center">
                        <FaEnvelope className="mr-2" /> {/* Email Icon */}
                        Email: info@ieactedu.in
                    </p>
                </div>

                <div className='container mx-auto border-t-2 border-[#f5f3f3] flex flex-col md:flex-row justify-center md:justify-between gap-2 px-1 py-2 md:py-5 w-full bg-yellow-500'>
                    <p className='caveat text-orange-600 text-base font-semibold md:text-lg text-center'>
                        Copyrights @ 2024 Indra Institute
                    </p>
                    <Link href="https://www.opalminds.com/" target="_blank" className='flex justify-center items-center'>
                        <p className='text-orange-600 font-semibold text-base md:text-lg text-center mr-1 caveat'>Designed by</p>
                        <Image src="/opallogo.webp" width={100} height={100} alt='Opal Logo' className='w-[130px] h-auto' />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
