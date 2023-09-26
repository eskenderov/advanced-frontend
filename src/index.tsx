import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./assets/styles/index.scss";
import ThemeProvider from "./theme/ThemeProvider";
render(
  <BrowserRouter future={{ v7_startTransition: true }}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
