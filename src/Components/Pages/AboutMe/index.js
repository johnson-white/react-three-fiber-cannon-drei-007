import style from "./AboutMe.module.css";
import NavBar from "../DOMComponents/NavBar";

function AboutMe({ updateActiveScene }) {
  return (
    <>
      <h1>ABOUT ME</h1>
      <NavBar updateActiveScene={updateActiveScene}></NavBar>
      <p>I hope you liked the camera animations!</p>
      <p>
        <span>2022 - 2021</span> School Of Code, Intensive 16 Week Bootcamp
      </p>
      <p>
        <span>2021 - 2020</span> C#, Unity 3D{" "}
      </p>
      <p>
        <span>2018</span> Web Development, MERN Stack{" "}
      </p>
      <p>
        <span>2017</span> Java{" "}
      </p>
      <div>Site under development.</div>
    </>
  );
}

export default AboutMe;
