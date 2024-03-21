import { Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.png";

function Navbar() {
  return (
    <nav
      style={{
        background: "#3281a8",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Link to="/">
        <img src={homeIcon} alt="Home icon" style={{ height: "2rem" }} />
      </Link>
      <Link to="/new-beer">Add a new beer</Link>
    </nav>
  );
}

export default Navbar;
