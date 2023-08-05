import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

interface NavbarLinkProps {
  to: string;
  label: string;
  activeSection: string | null;
}

// Navbar Component
const NavbarLink: React.FC<NavbarLinkProps> = ({
  to,
  label,
  activeSection,
}) => {
  const isActive = activeSection === to;
  const activeClassName = isActive ? "text-blue-500" : "";

  return (
    <li>
      <Link
        activeClass="active"
        to={to}
        smooth={true}
        spy={true}
        offset={-70}
        duration={500}
        isDynamic={true}
        className={`cursor-pointer text-lg ${activeClassName}`}
      >
        {label}
      </Link>
    </li>
  );
};

// Scroll Function
const updateActiveSection = (
  setActiveSection: React.Dispatch<React.SetStateAction<string | null>>
) => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll<HTMLElement>(
      "[data-scroll-section]"
    );

    sections.forEach((section) => {
      const sectionId = section.getAttribute("id");
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop - 70 &&
        scrollPosition < sectionTop + sectionHeight - 70
      ) {
        setActiveSection(sectionId);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};

// DarkMode Toggler Component
const DarkModeToggle: React.FC<{
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}> = ({ isDarkMode, toggleDarkMode }) => {
  const buttonClasses = `text-xl ${
    isDarkMode ? "text-white" : "text-yellow-500"
  }`;
  const icon = isDarkMode ? faSun : faMoon;

  return (
    <div
      className={`w-[56px] p-1 pl-3 rounded-full ${
        isDarkMode ? "bg-blue-600" : "bg-gray-800"
      } focus:outline-none`}
    >
      <button onClick={toggleDarkMode}>
        <FontAwesomeIcon
          icon={icon}
          className={`${buttonClasses} ${isDarkMode ? "" : "invisible"}`}
        />
        <FontAwesomeIcon
          icon={icon}
          className={`${buttonClasses} ${isDarkMode ? "invisible" : ""}`}
        />
      </button>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [toggleBar, setToggleBar] = useState<boolean>(false);

  // Dark Mode Toggler Function
  const toggleDarkMode = () => {
    const updatedDarkMode = !isDarkMode;
    setIsDarkMode(updatedDarkMode);
    document.documentElement.classList.toggle("dark", updatedDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(updatedDarkMode));
  };

  // Scrolling Function
  useEffect(() => {
    updateActiveSection(setActiveSection);
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
      setIsDarkMode(JSON.parse(savedDarkMode));
      document.documentElement.classList.toggle(
        "dark",
        JSON.parse(savedDarkMode)
      );
    }

    // Set Navbar Sticky
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(isSticky);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 ${
        isSticky ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-3 font-semibold flex justify-between items-center relative">
        <div>
          <h1 className="text-3xl font-bold">Zahid</h1>
        </div>

        <div
          className="block mr-6 text-2xl lg:hidden"
          onClick={() => setToggleBar(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>

        {/* Lg & above Screen */}
        <ul className="lg:flex items-center space-x-4 hidden">
          {["intro", "about", "projects", "contact"].map((to) => (
            <NavbarLink
              key={to}
              to={to}
              label={to.charAt(0).toUpperCase() + to.slice(1)}
              activeSection={activeSection}
            />
          ))}
          <DarkModeToggle
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />
        </ul>

        {/* Mobile & Tablet Screen */}
        <div
          className={`fixed top-0 right-0 h-full bg-gray-200 dark:bg-gray-800 p-4 ${
            toggleBar ? "opacity-100 w-48" : "opacity-0 w-0"
          } transition-opacity ease-in-out duration-300`}
        >
          <ul className="flex flex-col space-y-4">
            <div className="bg-gray-300  flex justify-center items-center shadow-lg w-8 h-8 rounded-full">
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => setToggleBar(false)}
              />
            </div>
            {["intro", "about", "projects", "contact"].map((to) => (
              <NavbarLink
                key={to}
                to={to}
                label={to.charAt(0).toUpperCase() + to.slice(1)}
                activeSection={activeSection}
              />
            ))}
            <DarkModeToggle
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
