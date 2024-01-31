import "../styles/Navbar.css";
import logo from "../assets/airbnb-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Airbnb logo" className="airbnb-logo" />
    </nav>
  );
};

export default Navbar;
