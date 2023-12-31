import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import NavbarLink from "./common/NavbarLink";

// DarkMode Toggler Component
const DarkModeToggle: React.FC<{
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}> = ({ isDarkMode, toggleDarkMode }) => {
  const buttonClasses = `text-xl ${
    isDarkMode ? "text-yellow-500" : "text-white"
  }`;
  const icon = isDarkMode ? faMoon : faSun;

  return (
    <div
      className={`w-[58px] pb-[3px] lg:pt-[6px] pl-3 rounded-full border-2  dark:border-yellow-300 ${
        isDarkMode ? "bg-gray-800" : "bg-blue-600"
      } focus:outline-none`}
    >
      <button onClick={toggleDarkMode}>
        <FontAwesomeIcon
          icon={icon}
          className={`${buttonClasses} ${isDarkMode ? "invisible" : ""}`}
        />
        <FontAwesomeIcon
          icon={icon}
          className={`${buttonClasses} ${isDarkMode ? "" : "invisible"}`}
        />
      </button>
    </div>
  );
};

const Navbar: React.FC = () => {
  // const [isSticky, setIsSticky] = useState<boolean>(false);
  const isSticky = false;
  const storedMode = localStorage.getItem("darkMode");
  const currentMode = storedMode ? JSON.parse(storedMode) : false;
  const [isDarkMode, setIsDarkMode] = useState<boolean>(currentMode);

  // Apply dark mode class on component mount and when isDarkMode changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  // Dark Mode Toggler Function
  const toggleDarkMode = () => {
    const updatedDarkMode = !isDarkMode;
    setIsDarkMode(updatedDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(updatedDarkMode));
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 ${
        isSticky ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">
        <div>
          <h1 className="text-3xl font-bold">Zahid</h1>
        </div>

        <ul className="hidden lg:flex items-center space-x-10">
          {[
            { name: "Intro", url: "/" },
            { name: "About", url: "/about" },
            { name: "Skills", url: "/skills" },
            { name: "Projects", url: "/projects" },
            { name: "Contact", url: "/contact" },
          ].map((item, i) => (
            <NavbarLink key={i} to={item.url} label={item.name} />
          ))}
        </ul>

        <DarkModeToggle
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </div>
    </nav>
  );
};

export default Navbar;
