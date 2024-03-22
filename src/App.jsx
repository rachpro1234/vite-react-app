import React, { useState, useEffect } from "react";
import "./index.css";
// import Header from "./header/Header";
import { Outlet } from "react-router-dom";
// import Footer from "./footer/Footer";
// import Newsletter from "./newsletter/Newsletter";
import scrollreveal from "scrollreveal";

import ScrollToTop from "./scrollToTop/ScrollToTop";


const LazyHeader = React.lazy(() => import("./header/Header"))
const LazyNewsletter = React.lazy(() => import("./newsletter/Newsletter"))
const LazyFooter = React.lazy(() => import("./footer/Footer"))


// get default theme or the theme saved in localstorage when found
function defaultTheme() {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme ? savedTheme : "light";
}
function App() {
  const [theme, setTheme] = useState(defaultTheme());

  // dark / light mode toggle
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  // saving the theme mode into the localstorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // to apply the sliding animations when the page is loaded
  useEffect(() => {
    const animations = () => {
      const sr = scrollreveal({
        origin: "top",
        distance: "80px",
        duration: "2000",
        delay: "1",
        reset: false,
      });
      sr.reveal(
        `
        .header,
        .home-elements,
        .shop-container,
        .blog-banner,
        .blog-content,
        .about-banner,
        .about-us,
        .our-app,
        .contact-banner,
        .contact-info,
        .contact-field,
        .signup-container,
        .signin-container,
        .features,
        .products,
        .banner,
        .second-banner,
        .third-banner,
        .newsletter,
        .footer
        `,
        {
          interval: 1000,
        }
      );
    };

    animations();
  }, []);

  return (
    <div data-theme={theme} className="app">
      <ScrollToTop />
      <LazyHeader changeTheme={changeTheme} currentTheme={theme} />
      <Outlet />
      <LazyNewsletter />
      <LazyFooter />
    </div>
  );
}

export default App;