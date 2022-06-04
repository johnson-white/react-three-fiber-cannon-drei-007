import style from "./NavBar.module.css";

function NavBar({ updateActiveScene }) {
  return (
    <>
      <nav className={style.navbar}>
        <h1 onClick={() => updateActiveScene("home")}>H_ME_</h1>
        <h1 onClick={() => updateActiveScene("skills")}>SKILLS_</h1>
        <h1>-PROJECTS</h1>
        <h1>ABOUT_ME</h1>
        <h1>C_NT_CT</h1>
      </nav>
    </>
  );
}

export default NavBar;
