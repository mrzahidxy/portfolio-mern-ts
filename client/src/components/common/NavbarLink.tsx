import { useLocation } from "react-router-dom";

interface NavbarLinkProps {
  to: string;
  label: string;
  activeSection?: string | null;
}

// Navbar Component
const NavbarLink: React.FC<NavbarLinkProps> = ({ to, label }) => {
  const { pathname } = useLocation();
  return (
    <li>
      <a
        className={`cursor-pointer font-bold font-2xl ${
          pathname === to ? "text-blue-500" : ""
        }`}
        href={to}
      >
        {label}
      </a>
    </li>
  );
};

export default NavbarLink;
