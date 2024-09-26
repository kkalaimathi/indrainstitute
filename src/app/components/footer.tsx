import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white  py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Important Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link href="#about" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#music" className="hover:text-blue-400">
                  Classes
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
             
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="mb-1">3rd Floor,Chathriya Towers,</p>
            <p className="mb-1">No1 Tolgate,Trichy 621216</p>
            <p className="mb-1">Email:<Link href="mailto: info@ieactedu.in" target='_blank'> info@ieactedu.in</Link></p>
            <p className="mb-1">Phone: <Link href="tel:9360907074" target='_blank'>93609 07074</Link>,<Link href="tel:9360907075" target='_blank'>93609 07075</Link></p>
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-blue-400">
                <FaFacebook size={24} />
              </Link>
              <Link href="#" className="hover:text-blue-400">
                <FaTwitter size={24} />
              </Link>
              <Link href="#" className="hover:text-blue-400">
                <FaInstagram size={24} />
              </Link>
              <Link href="#" className="hover:text-blue-400">
                <FaLinkedin size={24} />
              </Link>
              <Link href="#" className="hover:text-blue-400">
                <FaWhatsapp size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col lg:flex-row justify-around items-center text-center mt-6 border-t border-gray-700 pt-4">
                    <p className='caveat text-white  '>
                        Copyrights @ 2024 Indra Institute
                    </p>
                    <Link href="https://www.opalminds.com/" target="_blank" className='flex justify-center items-center'>
                        <p className='text-white  '>Designed by</p>
                        <Image src="/opallogo.webp" width={100} height={100} alt='Opal Logo' className='w-[130px] h-auto' />
                    </Link>
                </div>
      </div>
    </footer>
  );
};

export default Footer;
