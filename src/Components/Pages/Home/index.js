import style from "./Home.module.css";
import NavBar from "../DOMComponents/NavBar";

function Home() {
  return (
    <>
      <h1>HOME</h1>
      <NavBar></NavBar>
      <div>Imagine there are some contents here</div>
      <div>These are styled by flexbox css!</div>
      <div>Some additional notes</div>
    </>
  );
}

export default Home;
