import style from "./Home.module.css";
import NavBar from "../DOMComponents/NavBar";

function Home({ updateActiveScene }) {
  const highlight = {
    color: "black",
    backgroundColor: "lawngreen",
    textAlign: "center",
    border: "none",
    borderRadius: "0",
  };

  return (
    <div className={style.home}>
      <NavBar updateActiveScene={updateActiveScene}></NavBar>
      <h1>JOHNSON SINGH</h1>
      <p>
        I'm a full stack web and hobbyist game developer, and a graduate of the
        School of Code bootcamp. I am technically and creatively skilled and
        constantly think about user experience and product design!
      </p>
      <p style={highlight}>
        I'm open to opportunities as a <span>Front End</span> or{" "}
        <span>Full Stack</span> developer!
      </p>
      <h1>++PROJECTS</h1>
      <p>
        I have <span style={highlight}>~800 commits</span> in the last 8 months
        and at least <span style={highlight}>9 public projects</span> for you to
        browse:{" "}
        <a href="https://github.com/bM7tcHF88GBxDni" target="_blank">
          GitHub!
        </a>{" "}
      </p>
      <p>
        Contact me on{" "}
        <a href="https://www.linkedin.com/in/johnsonsingh/" target="_blank">
          LinkedIn
        </a>{" "}
        if you want to hire me or have job opportunities!
      </p>
      <p>
        {" "}
        You can view my code for this site{" "}
        <a
          href="https://github.com/bM7tcHF88GBxDni/react-three-fiber-cannon-drei-007"
          target="_blank"
        >
          here
        </a>{" "}
        and you can view my code for the research and experimentation{" "}
        <a
          href="https://github.com/bM7tcHF88GBxDni/react-three-fiber-cannon-drei-004"
          target="_blank"
        >
          here
        </a>
        .
      </p>
    </div>
  );
}

export default Home;
