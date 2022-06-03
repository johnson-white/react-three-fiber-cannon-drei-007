import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

function NavBar({ updateActiveScene }) {
  return (
    <>
      <nav className={style.navbar}>
        <div onClick={() => updateActiveScene("home")}>Home</div>
        <div onClick={() => updateActiveScene("aboutMe")}>About</div>
        <div>WIP</div>
        <div>WIP</div>
      </nav>
    </>
  );
}

export default NavBar;
