import { Link } from "react-scroll";

interface NavbarLinkProps {
  to: string;
  label: string;
  activeSection?: string | null;
}

// Navbar Component
const NavbarLink: React.FC<NavbarLinkProps> = ({
  to,
  label,
}) => {


  // const isActive = activeSection === to;
  // const activeClassName = isActive ? "text-blue-500" : "";

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
        className="cursor-pointer font-semibold font-xl"
        // className={`cursor-pointer text-xl ${activeClassName}`}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavbarLink;
