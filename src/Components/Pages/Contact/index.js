import style from "./Contact.module.css";
import NavBar from "../DOMComponents/NavBar";

function Contact({ updateActiveScene }) {
  return (
    <div className={style.contact}>
      <NavBar updateActiveScene={updateActiveScene}></NavBar>
      <h1>CONTACT</h1>
      <p>
        Message me here with job or networking opportunities and I will see them
        and respond really quickly!
      </p>
      <p>
        <a href="https://www.linkedin.com/in/johnsonsingh/" target="_blank">
          LinkedIn
        </a>
      </p>
      <p>
        I'm very active on GitHub (with ~700 commits this year) and you can find
        Front End React, Back End Express and JWT, and Unity 3D C# projects!
      </p>
      <p>
        <a href="https://github.com/bM7tcHF88GBxDni" target="_blank">
          GitHub
        </a>
      </p>
    </div>
  );
}

export default Contact;
