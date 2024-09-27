






// "use client";
// import { useState, useEffect, useRef } from "react";
// import { FaChevronDown, FaArrowUp } from "react-icons/fa"; 
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
//   const [showScrollUp, setShowScrollUp] = useState(false); 
//   const navbarRef = useRef<HTMLDivElement | null>(null);

//   const toggleDropdown = (key: string) => {
//     setDropdownOpen(dropdownOpen === key ? null : key);
//   };

//   const handleClickOutside = (event: MouseEvent) => {
//     if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
//       setDropdownOpen(null); 
//       setMenuOpen(false); 
//     }
//   };

//   const handleScroll = () => {
//     setShowScrollUp(window.scrollY > 300);
//     setMenuOpen(false)
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

// // Function to handle smooth scroll and remove spacing between components
// const handleNavClick = (href: string | undefined) => {
//   const safeHref = href || "#default"; // Provide a default value or handle undefined case
//   const targetSection = document.querySelector(safeHref);
//   if (targetSection) {
//     targetSection.scrollIntoView({ behavior: "smooth", block: "start" });

//     const components = document.querySelectorAll(".spacing-component");
//     components.forEach((component) => {
//       const element = component as HTMLElement;
//       element.style.margin = "30px";
//       element.style.padding = "0";
//     });
//   }
// };




//   return (
//     <nav ref={navbarRef} className="bg-white shadow-lg sticky top-0 z-50 ">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <img src={Navbarlinks.logo.src} alt={Navbarlinks.logo.alt} className="h-20 w-auto" />

//           {/* Menu Links for Desktop */}
//           <div className="hidden md:flex md:flex-row md:gap-6">
//           {Navbarlinks.navLinks.map((link: Link) => (
//   <div key={link.key} className="relative">
//     {link.dropdownLinks ? (
//       <div>
//         <button
//           type="button"
//           onClick={() => toggleDropdown(link.key)}
//           className="flex items-center text-gray-700 hover:text-blue-500 font-medium"
//         >
//           {link.label}
//           <FaChevronDown className="ml-2" />
//         </button>
//         {dropdownOpen === link.key && (
//           <div className="absolute bg-white shadow-lg py-2 mt-2 w-40 z-50">
//             {link.dropdownLinks.map((dropdownLink: DropdownLink) => (
//               <Link
//                 key={dropdownLink.key}
//                 href={dropdownLink.href}
//                 onClick={() => handleNavClick(dropdownLink.href)} // Add click handler
//                 className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//               >
//                 {dropdownLink.label}
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     ) : (
//       <Link
//         href={link.href as any}
//         onClick={() => handleNavClick(link.href)} // Add click handler
//         className="text-gray-700 hover:text-blue-500 font-medium"
//       >
//         {link.label}
//       </Link>
//     )}
//   </div>
// ))}

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
//               type="button"
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="text-[#FFBB32] hover:text-[#c28f29]"
//             >
//               <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu Links */}
//         {menuOpen && (
//           <div className="md:hidden absolute left-0 top-16 px-4 py-2 bg-white w-full">
//             <div className="flex flex-col">
//               {Navbarlinks.navLinks.map((link: Link) => (
//                 <div key={link.key} className="relative">
//                   {link.dropdownLinks ? (
//                     <div>
//                       <button
//                         type="button"
//                         onClick={() => toggleDropdown(link.key) }
//                         className="flex justify-between items-center w-full text-gray-700 hover:text-blue-500 font-medium "
//                       >
//                         {link.label}
//                         <FaChevronDown className="ml-2" />
//                       </button>
//                       {dropdownOpen === link.key && (
//                         <div className="bg-white shadow-lg w-full">
//                           {link.dropdownLinks.map((dropdownLink: DropdownLink) => (
//                             <Link
//                               key={dropdownLink.key}
//                               href={dropdownLink.href}
//                               className="block px-4 p-1 text-gray-700 hover:bg-gray-100"
//                             >
//                               {dropdownLink.label}
//                             </Link>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   ) : (
//                     <Link
//                       href={link.href as any}
//                       className="block text-gray-700 hover:text-blue-500 font-medium px-4 py-2"
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
import { useRouter } from "next/router"; // Import useRouter
import { FaChevronDown, FaArrowUp } from "react-icons/fa"; 
import { Navbarlinks } from "./navbarlinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

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

    const sections = Navbarlinks.navLinks.map(link => document.querySelector(link.href as string));
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
      if (section && section.getBoundingClientRect().top <= scrollPosition && section.getBoundingClientRect().bottom >= scrollPosition) {
        setActiveLink(Navbarlinks.navLinks[index].href);
      }
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    // Set the active link based on the current pathname
    const currentLink = Navbarlinks.navLinks.find(l => l.href === pathname);
    setActiveLink(currentLink ? currentLink.href : null);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const handleNavClick = (href?: string) => {
    const safeHref = href || "#default"; // Provide a default value
    const targetSection = document.querySelector(safeHref);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveLink(href || null); // Set active link, handle undefined
    }
  };

  return (
    <nav ref={navbarRef} className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <img src={Navbarlinks.logo.src} alt={Navbarlinks.logo.alt} className="h-20 w-auto" />

          {/* Menu Links for Desktop */}
          <div className="hidden md:flex md:flex-row md:gap-6">
            {Navbarlinks.navLinks.map((link: Link) => (
              <div key={link.key} className="relative">
                <Link
                  href={link.href as any}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-gray-700 hover:text-blue-500 font-medium ${activeLink === link.href ? 'text-blue-500' : ''}`}
                >
                  {link.label}
                </Link>
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
                  <Link
                    href={link.href as any}
                    onClick={() => handleNavClick(link.href)}
                    className={`block text-gray-700 hover:text-blue-500 font-medium px-4 py-2 ${activeLink === link.href ? 'text-blue-500' : ''}`}
                  >
                    {link.label}
                  </Link>
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

