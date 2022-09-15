import Nav from "../../components/Nav";
import Logo from "../../components/Logo";

const Header = () => {
  return (
    <div className="flex justify-between text-2xl p-10">
      <Logo />
      <Nav />
    </div>
  );
};

export default Header;
