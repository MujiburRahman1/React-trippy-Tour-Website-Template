// Import specific icon objects from Font Awesome
import {
  faHouseUser,
  faCircleInfo,
  faBriefcase,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

export const MenuItems = [
  {
    title: "Home",
    url: "/",
    cName: "nav-links",
    icon: faHouseUser, // Use the imported icon object
  },
  {
    title: "About",
    url: "/about",
    cName: "nav-links",
    icon: faCircleInfo, // Use the imported icon object
  },
  {
    title: "Service",
    url: "/service",
    cName: "nav-links",
    icon: faBriefcase, // Use the imported icon object
  },
  {
    title: "Contact",
    url: "/contact",
    cName: "nav-links",
    icon: faAddressBook, // Use the imported icon object
  },
  // {
  //   title: "Sign Up",
  //   url: "/signup",
  //   cName: "nav-links-mobile",
  // },
];
