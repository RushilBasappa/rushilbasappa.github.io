import Link from "next/link";
import Icon from "../../components/Icon";
import navLinks from "../../constants/navlinks";

const Footer = () => {
  return (
    <nav className="flex justify-between text-2xl p-10">
      <div className="flex flex-row">
        <Icon iconName="FaGithub" />
        <Icon iconName="FaLinkedin" />
      </div>
      <div>RESUME</div>
    </nav>
  );
};

export default Footer;
