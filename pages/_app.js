import "../styles/global.scss";
// import { ThemeProvider } from "next-themes";
import AOS from "aos";
import React, { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    // <ThemeProvider attribute="class">
    <Component {...pageProps} />
    // </ThemeProvider>
  );
}

export default MyApp;
