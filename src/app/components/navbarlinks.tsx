export const Navbarlinks = {
    logo: {
      src: "",
      alt: "Indra Institute"
    },
    navLinks: [
      {
        label: "Home",
        href: "/",
        key: "home"
      },
      {
        label: "About Us",
        href: "#about",
        key: "about"
      },
      {
        label: "Students",
        key: "students",
        dropdownLinks: [
          {
            label: "Music Classes",
            href: "#music",
            key: "music"
          },
          {
            label: "Dance Classes",
            href: "#dance",
            key: "dance"
          },
          {
            label: "Sports Programs",
            href: "#sports",
            key: "sports"
          },
          {
            label: "Computer Tuition",
            href: "#computer",
            key: "computer"
          }
        ]
      },
      {
        label: "Parents",
        key: "parents",
        dropdownLinks: [
          {
            label: "Yoga",
            href: "#yoga",
            key: "yoga"
          },
          {
            label: "Meditation",
            href: "#meditation",
            key: "meditation"
          }
        ]
      }
    ],
    contactButton: {
      label: "Contact Us",
      href: "#contact",
      key: "contact"
    }
  };
  