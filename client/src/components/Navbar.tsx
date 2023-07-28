import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

interface NavbarLinkProps {
  to: string;
  label: string;
}

const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 0);

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
  }, []);

  const NavbarLink: React.FC<NavbarLinkProps> = ({ to, label }) => {
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white ${
        isSticky ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-3 font-semibold flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Zahid</h1>
        </div>
        <ul className="lg:flex space-x-4 hidden">
          <NavbarLink to="intro" label="Intro" />
          <NavbarLink to="about" label="About" />
          <NavbarLink to="projects" label="Projects" />
          <NavbarLink to="blogs" label="Blogs" />
          <NavbarLink to="contact" label="Contact" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
