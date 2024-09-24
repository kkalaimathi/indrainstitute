"use client";
import { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Import the Chevron Down icon
import { Navbarlinks } from './navbarlinks';

interface DropdownLink {
  label: string;
  href: string;
  key: string;
}

interface Link {
  label: string;
  href?: string;
  key: string;
  dropdownLinks?: DropdownLink[];
}

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = (key: string) => {
    setDropdownOpen(dropdownOpen === key ? null : key);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
      setDropdownOpen(null); // Close the dropdown if clicked outside
      setMenuOpen(false); // Close the mobile menu if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navbarRef} className="bg-yellow-400 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pt-4 lg:pb-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {/* <img src={Navbarlinks.logo.src} alt={Navbarlinks.logo.alt} className="h-10 w-auto" /> */}
          <h2 className='font-semibold  text-white text-4xl'>Indra Institute</h2>

          {/* Menu Links for Desktop */}
          <div className="hidden md:flex space-x-4 text-xl gap-8 ml-10">
            {Navbarlinks.navLinks.map((link: Link) => (
              <div key={link.key} className="relative">
                {link.dropdownLinks ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(link.key)}
                      className="flex items-center text-white text-xl hover:text-teal-400 font-medium"
                    >
                      {link.label}
                      <FaChevronDown className="ml-2" />
                    </button>
                    {dropdownOpen === link.key && (
                      <div className="absolute bg-white shadow-lg py-2 mt-2 w-40 z-50">
                        {link.dropdownLinks.map((dropdownLink: DropdownLink) => (
                          <a
                            key={dropdownLink.key}
                            href={dropdownLink.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-teal-200"
                          >
                            {dropdownLink.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a href={link.href} className="text-white text-lg hover:text-teal-300 font-medium">
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Contact Button for Desktop */}
          <div className="hidden md:flex items-center">
            <a
              href={Navbarlinks.contactButton.href}
              className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
            >
              {Navbarlinks.contactButton.label}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white hover:text-green-300">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {menuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-2 mt-4">
              {Navbarlinks.navLinks.map((link: Link) => (
                <div key={link.key} className="relative">
                  {link.dropdownLinks ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(link.key)}
                        className="flex justify-between items-center w-full text-white hover:text-green-300 font-medium px-4 py-2"
                      >
                        {link.label}
                        <FaChevronDown className="ml-2" />
                      </button>
                      {dropdownOpen === link.key && (
                        <div className="bg-white shadow-lg py-2 w-full">
                          {link.dropdownLinks.map((dropdownLink: DropdownLink) => (
                            <a
                              key={dropdownLink.key}
                              href={dropdownLink.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-green-200"
                            >
                              {dropdownLink.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a href={link.href} className="block text-gray-700 hover:text-green-300 font-medium px-4 py-2">
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Button for Mobile */}
            <div className="mt-4">
              <a
                href={Navbarlinks.contactButton.href}
                className="block w-full text-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                {Navbarlinks.contactButton.label}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
