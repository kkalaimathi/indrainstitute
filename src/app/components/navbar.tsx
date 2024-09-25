// "use client";
// import { useState, useEffect, useRef } from "react";
// import { FaChevronDown, FaArrowUp } from "react-icons/fa"; // Import icons
// import { Navbarlinks } from "./navbarlinks";
// import Link from "next/link";

// interface DropdownLink {
//   label: string;
//   href: string;
//   key: string;
// }

// interface Link {
//   label: string;
//   href?: string;
//   key: string;
//   dropdownLinks?: DropdownLink[];
// }

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showScrollUp, setShowScrollUp] = useState(false); // For scroll-up arrow visibility
//   const navbarRef = useRef<HTMLDivElement | null>(null);
//   const dropdownRef = useRef<HTMLDivElement | null>(null);

//   const toggleDropdown = (key: string) => {
//     setDropdownOpen(dropdownOpen === key ? null : key);
//   };

//   const handleClickOutside = (event: MouseEvent) => {
//     if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
//       setDropdownOpen(null); // Close the dropdown if clicked outside
//       setMenuOpen(false); // Close the mobile menu if clicked outside
//     }
//   };

//   const handleScroll = () => {
//     if (window.scrollY > 300) {
//       setShowScrollUp(true);
//     } else {
//       setShowScrollUp(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const closeMenu = () => {
//     setMenuOpen(false); // Close the mobile menu
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav ref={navbarRef} className="bg-white shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <img
//             src={Navbarlinks.logo.src}
//             alt={Navbarlinks.logo.alt}
//             className="h-10 w-auto"
//           />

//           {/* Menu Links for Desktop */}
//           <div className="hidden md:flex md:flex-row md:gap-6">
//             {Navbarlinks.navLinks.map((link: Link) => (
//               <div key={link.key} className="relative">
//                 {link.dropdownLinks ? (
//                   <div>
//                     <button
//                       onClick={() => toggleDropdown(link.key)}
//                       className="flex items-center text-gray-700 hover:text-blue-500 font-medium"
//                     >
//                       {link.label}
//                       <FaChevronDown className="ml-2" /> {/* Add Chevron Down Icon */}
//                     </button>
//                     {dropdownOpen === link.key && (
//                       <div className="absolute bg-white shadow-lg py-2 mt-2 w-40 z-50">
//                         {link.dropdownLinks.map((dropdownLink: DropdownLink) => (
//                           <Link
//                             key={dropdownLink.key}
//                             href={dropdownLink.href}
//                             className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                             onClick={closeMenu} // Close menu on link click
//                           >
//                             {dropdownLink.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <Link
//                     href={link.href as any}
//                     className="text-gray-700 hover:text-blue-500 font-medium"
//                     onClick={closeMenu} // Close menu on link click
//                   >
//                     {link.label}
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Contact Button for Desktop */}
//           <div className="hidden md:flex items-center">
//             <Link
//               href={Navbarlinks.contactButton.href}
//               className="px-4 py-2 bg-[#FFBB32] text-white rounded-lg hover:bg-[#c28f29]"
//             >
//               {Navbarlinks.contactButton.label}
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="flex md:hidden items-center p-3">
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="text-[#FFBB32] hover:text-[#c28f29]"
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu Links */}
//         {menuOpen && (
//           <div className="md:hidden">
//             <div className="flex flex-col">
//               {Navbarlinks.navLinks.map((link: Link) => (
//                 <div key={link.key} className="relative">
//                   {link.dropdownLinks ? (
//                     <div>
//                       <button
//                         onClick={() => toggleDropdown(link.key)}
//                         className="flex justify-between items-center w-full text-gray-700 hover:text-blue-500 font-medium px-4 py-2"
//                       >
//                         {link.label}
//                         <FaChevronDown className="ml-2" />
//                       </button>
//                       <div
//                         ref={dropdownRef}
//                         className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                           dropdownOpen === link.key ? 'max-h-40' : 'max-h-0'
//                         }`}
//                       >
//                         {dropdownOpen === link.key && (
//                           <div className="bg-white shadow-lg w-full">
//                             {link.dropdownLinks.map((dropdownLink: DropdownLink) => (
//                               <Link
//                                 key={dropdownLink.key}
//                                 href={dropdownLink.href}
//                                 className="block px-4 p-1 text-gray-700 hover:bg-gray-100"
//                                 onClick={closeMenu} // Close menu on link click
//                               >
//                                 {dropdownLink.label}
//                               </Link>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   ) : (
//                     <Link
//                       href={link.href as any}
//                       className="block text-gray-700 hover:text-blue-500 font-medium px-4 py-2"
//                       onClick={closeMenu} // Close menu on link click
//                     >
//                       {link.label}
//                     </Link>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Contact Button for Mobile */}
//             <div className="mt-2 pb-4">
//               <Link
//                 href={Navbarlinks.contactButton.href}
//                 className="block w-full text-center px-4 py-2 bg-[#FFBB32] text-white rounded-lg hover:bg-[#c28f29]"
//                 onClick={closeMenu} // Close menu on link click
//               >
//                 {Navbarlinks.contactButton.label}
//               </Link>
//             </div>
//           </div>
//         )}

//         {/* Scroll-up Arrow */}
//         {showScrollUp && (
//           <button
//             onClick={scrollToTop}
//             className="fixed bottom-8 right-8 bg-[#FFBB32] text-white p-3 rounded-full shadow-lg hover:bg-[#c28f29] transition duration-300"
//           >
//             <FaArrowUp />
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

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

  return (
    <nav ref={navbarRef} className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <img src={Navbarlinks.logo.src} alt={Navbarlinks.logo.alt} className="h-10 w-auto" />

          {/* Menu Links for Desktop */}
          <div className="hidden md:flex md:flex-row md:gap-6">
            {Navbarlinks.navLinks.map((link: Link) => (
              <div key={link.key} className="relative">
                {link.dropdownLinks ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleDropdown(link.key)}
                      className="flex items-center text-gray-700 hover:text-blue-500 font-medium"
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
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            {dropdownLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={link.href as any} className="text-gray-700 hover:text-blue-500 font-medium">
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
          <div className="md:hidden">
            <div className="flex flex-col">
              {Navbarlinks.navLinks.map((link: Link) => (
                <div key={link.key} className="relative">
                  {link.dropdownLinks ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => toggleDropdown(link.key)}
                        className="flex justify-between items-center w-full text-gray-700 hover:text-blue-500 font-medium px-4 py-2"
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
                      className="block text-gray-700 hover:text-blue-500 font-medium px-4 py-2"
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


