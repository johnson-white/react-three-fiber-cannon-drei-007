import style from "./AboutMe.module.css";
import NavBar from "../DOMComponents/NavBar";

function AboutMe({ updateActiveScene }) {
  return (
    <>
      <h1>ABOUT ME</h1>
      <NavBar updateActiveScene={updateActiveScene}></NavBar>
      <p>I hope you liked the camera animations!</p>
      <div>This page will have some stuff about me!</div>
      <div>These are styled by flexbox css!</div>
      <div>Some extra details!</div>
    </>
  );
}

export default AboutMe;
