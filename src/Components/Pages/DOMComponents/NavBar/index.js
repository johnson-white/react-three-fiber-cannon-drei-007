import style from "./NavBar.module.css";
import { animated, useSpring, config } from "@react-spring/web";
import { useState } from "react";

function NavText({ updateActiveScene, text, scene }) {
  const [animate, setAnimate] = useState(false);

  function toggleOn() {
    setAnimate(true);
  }

  function toggleOff() {
    setAnimate(false);
  }

  const slideUp = useSpring({
    from: { transform: "translateY(0%)" },
    to: { transform: "translateY(-25%)" },
    config: config.wobbly,
    loop: true,
    reset: true,
  });

  return (
    <animated.h1
      style={animate ? slideUp : null}
      onClick={() => updateActiveScene(scene)}
      onMouseEnter={toggleOn}
      onMouseLeave={toggleOff}
    >
      {text}
    </animated.h1>
  );
}

export default function NavBar({ updateActiveScene }) {
  return (
    <>
      <nav className={style.navbar}>
        <NavText
          scene={"home"}
          text={"H_ME_"}
          updateActiveScene={updateActiveScene}
        ></NavText>
        <NavText
          scene={"skills"}
          text={"SKILLS_"}
          updateActiveScene={updateActiveScene}
        ></NavText>
        <h1>-PROJECTS</h1>
        <h1>ABOUT_ME</h1>
        <h1>C_NT_CT</h1>
      </nav>
    </>
  );
}
