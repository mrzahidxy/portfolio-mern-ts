import { useLocation } from "react-router-dom";

interface NavbarLinkProps {
  to: string;
  label: string;
  activeSection?: string | null;
}

// Navbar Component
const NavbarLink: React.FC<NavbarLinkProps> = ({ to, label }) => {
  const { hash } = useLocation();

  return (
    <li>
      <a
        className={`cursor-pointer font-semibold font-xl ${
          hash === "#" + to ? "text-blue-500" : ""
        }`}
        href={"#"+to}
      >
        {label}
      </a>
    </li>
  );
};

export default NavbarLink;
