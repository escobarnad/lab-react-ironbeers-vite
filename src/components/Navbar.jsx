import { Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.png";

function Navbar() {
  return (
    <nav
      style={{
        background: "#3281a8",
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link to="/">
        <img src={homeIcon} alt="Home icon" style={{ height: "2rem" }} />
      </Link>
    </nav>
  );
}

export default Navbar;
