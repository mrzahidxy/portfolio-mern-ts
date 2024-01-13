"use client";

import React, { useEffect, useState } from "react";
import NavbarLink from "./NavbarLink";
import { DarkModeToggle } from "./DarkModeToggle.component";

const Navbar: React.FC = () => {
  const isSticky = false;
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const darkModeValue = localStorage.getItem("darkMode");
      const isDarkMode = darkModeValue === "true";

      setIsDarkMode(isDarkMode);
    }
  }, []);

  // Apply dark mode class on component mount and when isDarkMode changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  // Dark Mode Toggler Function
  const toggleDarkMode = () => {
    const updatedDarkMode = !isDarkMode;
    setIsDarkMode(updatedDarkMode);
    typeof window !== undefined &&
      localStorage.setItem("darkMode", JSON.stringify(updatedDarkMode));
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 dark:text-white ${
        isSticky ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">
        <div>
          <h1 className="text-3xl font-bold">Zahid</h1>
        </div>

        <ul className="hidden lg:flex items-center space-x-10">
          {[
            { name: "Intro", url: "intro" },
            { name: "About", url: "about" },
            { name: "Skills", url: "skills" },
            { name: "Projects", url: "projects" },
            { name: "Contact", url: "contact" },
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
