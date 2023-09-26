import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePageLazy } from "./pages/Home/HomePage.lazy";
import { AboutPageLazy } from "./pages/About/AboutPage.lazy";
import { Header } from "./components/Header";
import { useTheme } from "./theme/useTheme";

export const App = () => {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme === "dark" ? "dark" : ""}`}>
      <Header />
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path={"/home"} element={<HomePageLazy />} />
          <Route path={"/about"} element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
