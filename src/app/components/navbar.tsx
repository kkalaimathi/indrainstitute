"use client";
import { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaArrowUp } from "react-icons/fa"; 
import { Navbarlinks } from "./navbarlinks";
import Link from "next/link";

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
  const [showScrollUp, setShowScrollUp] = useState(false); 
  const [activePage, setActivePage] = useState("home"); // State to track active page
  const navbarRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = (key: string) => {
    setDropdownOpen(dropdownOpen === key ? null : key);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
      setDropdownOpen(null); 
      setMenuOpen(false); 
    }
  };

  const handleScroll = () => {
    setShowScrollUp(window.scrollY > 300);
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle smooth scroll and remove spacing between components
  const handleNavClick = (href: string | undefined, key: string) => {
    // console.log("handleNavClick---->", handleNavClick);
    
    setActivePage(key);
    console.log(activePage);
     // Set the clicked page as active
    const safeHref = href || "#home"; // Provide a default value or handle undefined case
    const targetSection = document.querySelector(safeHref);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });

      const components = document.querySelectorAll(".spacing-component");
      components.forEach((component) => {
        const element = component as HTMLElement;
        element.style.margin = "30px";
        element.style.padding = "0";
      });
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      // Track the last section in view
      let lastVisibleSection = "home";
  
      Navbarlinks.navLinks.forEach((section) => {
        const element = document.getElementById(section.key);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section's top is near the top of the viewport
          if (rect.top >= 0 && rect.top < window.innerHeight / 4) {
            setActivePage(section.key); // Update active page to the section in view
            lastVisibleSection = section.key;
          }
        }
      });
  
      // If no section is in view, set the active page to "home"
      if (window.scrollY === 0) {
        setActivePage("home");
      }
    };
  
    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);
  
    // Call it initially to set the correct active page
    handleScroll();
  
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
   // Empty dependency array ensures this runs once
  
  
  return (
    <nav ref={navbarRef} className="bg-white shadow-lg sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex flex-row justify-center items-center ">
          <img src={Navbarlinks.logo.src} alt={Navbarlinks.logo.alt} className="h-16 w-auto" />
          <p className="text-sm md:text-lg">Indra Educational Institute</p>
          </div>

          {/* Menu Links for Desktop */}
          <div className="hidden md:flex md:flex-row md:gap-6">
  {Navbarlinks.navLinks.map((link: Link) => (
    <div key={link.key} className="relative">
      {link.dropdownLinks ? (
        <div>
          <button
            type="button"
            onClick={() => toggleDropdown(link.key)}
            className={`flex items-center font-medium ${
              activePage === link.href?.substring(1) ? "text-red-500" : "text-rose-200"
            } hover:text-blue-500`}
          >
            {link.label}
            <FaChevronDown className="ml-2" />
          </button>
          {dropdownOpen === link.key && (
            <div className="absolute bg-white shadow-lg py-2 mt-2 w-40 z-50">
              {link.dropdownLinks.map((dropdownLink: DropdownLink) => (
                <Link
                  key={dropdownLink.key}
                  href={dropdownLink.href}
                  onClick={() => handleNavClick(dropdownLink.href, dropdownLink.key)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  {dropdownLink.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <Link
          href={link.href as any}
          onClick={() => handleNavClick(link.href, link.key)}
          className={`font-medium ${
            activePage === link.href?.substring(1) ? "text-red-500" : "text-gray-200"
          } hover:text-blue-500`}
        >
          {link.label}
        </Link>
      )}
    </div>
  ))}
</div>


          {/* Contact Button for Desktop */}
          <div className="hidden md:flex items-center">
            <Link
              href={Navbarlinks.contactButton.href}
              className="px-4 py-2 bg-[#FFBB32] text-white rounded-lg hover:bg-[#c28f29]"
            >
              {Navbarlinks.contactButton.label}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center p-3">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#FFBB32] hover:text-[#c28f29]"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {menuOpen && (
          <div className="md:hidden absolute left-0 top-16 px-4 py-2 bg-white w-full">
            <div className="flex flex-col">
              {Navbarlinks.navLinks.map((link: Link) => (
                <div key={link.key} className="relative">
                  {link.dropdownLinks ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => toggleDropdown(link.key)}
                        className={`flex justify-between items-center w-full font-medium ${
                          activePage === link.key ? "text-red-500" : "text-gray-700"
                        } hover:text-blue-500`}
                      >
                        {link.label}
                        <FaChevronDown className="ml-2" />
                      </button>
                      {dropdownOpen === link.key && (
                        <div className="bg-white shadow-lg w-full">
                          {link.dropdownLinks.map((dropdownLink: DropdownLink) => (
                            <Link
                              key={dropdownLink.key}
                              href={dropdownLink.href}
                              onClick={() => handleNavClick(dropdownLink.href, dropdownLink.key)}
                              className="block px-4 p-1 text-gray-700 hover:bg-gray-100"
                            >
                              {dropdownLink.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href as any}
                      onClick={() => handleNavClick(link.href, link.key)} // Add click handler
                      className={`block font-medium ${
                        activePage === link.key ? "text-red-500" : "text-gray-700"
                      } hover:text-blue-500 px-4 py-2`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Button for Mobile */}
            <div className="mt-2 pb-4">
              <Link
                href={Navbarlinks.contactButton.href}
                className="block w-full text-center px-4 py-2 bg-[#FFBB32] text-white rounded-lg hover:bg-[#c28f29]"
              >
                {Navbarlinks.contactButton.label}
              </Link>
            </div>
          </div>
        )}

        {/* Scroll-up Arrow */}
        {showScrollUp && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-[#FFBB32] text-white p-3 rounded-full shadow-lg hover:bg-[#c28f29] transition duration-300"
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
