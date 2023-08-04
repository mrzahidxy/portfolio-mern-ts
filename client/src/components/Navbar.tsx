import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

interface NavbarLinkProps {
  to: string;
  label: string;
  activeSection: string | null;
}

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
        className={`cursor-pointer ${activeClassName}`}
      >
        {label}
      </Link>
    </li>
  );
};

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

const DarkModeToggle = ({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) => {
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
  const isSticky = false;
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const updatedDarkMode = !isDarkMode;
    setIsDarkMode(updatedDarkMode);
    document.documentElement.classList.toggle("dark", updatedDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(updatedDarkMode));
  };

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
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black ${
        isSticky ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-3 font-semibold flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Zahid</h1>
        </div>
        <ul className="lg:flex space-x-4 hidden">
          <NavbarLink to="intro" label="Intro" activeSection={activeSection} />
          <NavbarLink to="about" label="About" activeSection={activeSection} />
          <NavbarLink
            to="projects"
            label="Projects"
            activeSection={activeSection}
          />
          {/* <NavbarLink to="blogs" label="Blogs" /> */}
          <NavbarLink
            to="contact"
            label="Contact"
            activeSection={activeSection}
          />

          <DarkModeToggle
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
