import style from "./Home.module.css";
import NavBar from "../DOMComponents/NavBar";

function Home({ updateActiveScene }) {
  return (
    <>
      <h1>HOME</h1>
      <NavBar updateActiveScene={updateActiveScene}></NavBar>
      <div>Hi!</div>
      <div>Welcome to my brand new WIP personal website!</div>
      <div>
        You can view the code{" "}
        <a
          href="https://github.com/bM7tcHF88GBxDni/react-three-fiber-cannon-drei-007"
          target="_blank"
        >
          here
        </a>
      </div>

      <div>This is the main home page, this is all placeholder content!</div>
      <div>These are styled by flexbox css!</div>
      <div>Some additional text!</div>
    </>
  );
}

export default Home;
