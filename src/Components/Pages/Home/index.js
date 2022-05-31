import style from "./Home.module.css";
import NavBar from "../DOMComponents/NavBar";

function Home({ updateActiveScene }) {
  return (
    <>
      <h1>HOME</h1>
      <NavBar updateActiveScene={updateActiveScene}></NavBar>
      <p>Hi, I'm Johnson!</p>
      <p>
        Welcome to my brand new 3D website! You can view the code{" "}
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
      <p>
        You're probably a recruiter so do checkout my{" "}
        <a href="https://github.com/bM7tcHF88GBxDni" target="_blank">
          GitHub
        </a>{" "}
        and{" "}
        <a href="https://www.linkedin.com/in/johnsonsingh/" target="_blank">
          LinkedIn
        </a>
        !
      </p>
    </>
  );
}

export default Home;
