import Link from "next/link";
import navLinks from "../../constants/navlinks";

const Nav = () => {
  return (
    <nav className="flex justify-between">
      <>LOGO</>
      <div>
        {Object.keys(navLinks).map((i) => (
          <Link href={navLinks[i]} key={i}>
            <a>{i}</a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
