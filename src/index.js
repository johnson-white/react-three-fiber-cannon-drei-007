import React from "react";
import ReactDOM from "react-dom/client";

import css from "./index.module.css";
import CanvasRender from "./Components/CanvasRender";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className={css.appContainer}>
    <CanvasRender />
  </div>
);
