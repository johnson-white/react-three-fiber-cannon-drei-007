import style from "./Home.module.css";
import NavBar from "../DOMComponents/NavBar";

function Home({ updateActiveScene }) {
  return (
    <div className={style.home}>
      <NavBar updateActiveScene={updateActiveScene}></NavBar>
      <h1>HOME</h1>
      <p>Hi, I'm Johnson!</p>
      <p>Welcome to my brand new 3D website!</p>{" "}
      <p>
        I'm looking for <span>Full Stack</span> and <span>Front End</span>{" "}
        roles!
      </p>
      <p>
        If you're a recruiter, do checkout my{" "}
        <a href="https://github.com/bM7tcHF88GBxDni" target="_blank">
          GitHub
        </a>{" "}
        and{" "}
        <a href="https://www.linkedin.com/in/johnsonsingh/" target="_blank">
          LinkedIn
        </a>
        !
      </p>
      <p>
        {" "}
        You can view the code{" "}
        <a
          href="https://github.com/bM7tcHF88GBxDni/react-three-fiber-cannon-drei-007"
          target="_blank"
        >
          here
        </a>{" "}
        and you can view the code for the research and experimentation{" "}
        <a
          href="https://github.com/bM7tcHF88GBxDni/react-three-fiber-cannon-drei-004"
          target="_blank"
        >
          here
        </a>
        .
      </p>
      <div>Site under development.</div>
    </div>
  );
}

export default Home;
