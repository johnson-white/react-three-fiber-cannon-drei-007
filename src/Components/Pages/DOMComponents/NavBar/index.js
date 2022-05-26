import { Link } from "react-router-dom";

function NavBar({ updateActiveScene }) {
  return (
    <>
      <nav>
        <Link to="/" onClick={() => updateActiveScene("home")}>
          Home
        </Link>
        <Link to="/aboutMe" onClick={() => updateActiveScene("aboutMe")}>
          About Me
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
