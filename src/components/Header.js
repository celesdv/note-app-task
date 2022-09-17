import "../styles/Header.css";
import { MdAppRegistration } from "react-icons/md";

const Header = () => {
  return (
    <nav className="nav-Bar">
      <MdAppRegistration className="icon" />
      <h1 className="brand">
        Note
        <span className="letter">App</span>
      </h1>
    </nav>
  );
};

export default Header;
