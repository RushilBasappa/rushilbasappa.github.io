import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const icons = {
  FaGithub,
  FaLinkedin,
};

const Icon = ({ iconName }) => {
  const Component = icons[iconName];
  return (
    <IconContext.Provider value={{ size: "1.5em" }}>
      <Component />
    </IconContext.Provider>
  );
};

export default Icon;
