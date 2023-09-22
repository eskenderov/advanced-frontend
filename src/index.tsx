import { render } from "react-dom";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
render(
  <BrowserRouter future={{ v7_startTransition: true }}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
