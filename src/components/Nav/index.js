import Link from "next/link";
import navLinks from "../../constants/navlinks";

const NavItem = ({ link }) => {
  return (
    <Link href={navLinks[link]} key={link}>
      <a className="p-5">{link}</a>
    </Link>
  );
};

const Nav = () => {
  return (
    <div>
      {Object.keys(navLinks).map((i) => (
        <NavItem link={i} key={i} />
      ))}
    </div>
  );
};

export default Nav;
