import style from "./AboutMe.module.css";
import NavBar from "../DOMComponents/NavBar";

function AboutMe() {
  return (
    <>
      <h1>ABOUT ME</h1>
      <NavBar></NavBar>
      <div>Some stuff about me!</div>
      <div>These are styled by flexbox css!</div>
      <div>Some extra details!</div>
    </>
  );
}

export default AboutMe;
