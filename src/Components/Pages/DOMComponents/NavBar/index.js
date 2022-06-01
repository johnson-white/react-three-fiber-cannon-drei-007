import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

function NavBar({ updateActiveScene }) {
  return (
    <>
      <nav className={style.navbar}>
        <Link to="/" onClick={() => updateActiveScene("home")}>
          Home
        </Link>
        <Link to="/aboutMe" onClick={() => updateActiveScene("aboutMe")}>
          About
        </Link>
        <div>WIP</div>
        <div>WIP</div>
      </nav>
    </>
  );
}

export default NavBar;
