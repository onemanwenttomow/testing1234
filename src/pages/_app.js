import PageFooter from "@/components/menu/PageFooter";
import PageHeader from "@/components/menu/PageHeader";
//import GlobalStyle from "@/styles/global-styles";
import styled from "styled-components";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "@/util/ThemeConfig";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <>
      <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <PageHeader />
        <button onClick={toggleTheme}>Switch Theme</button>
        <Component {...pageProps} theme={theme} />
        <PageFooter />
      </ThemeProvider>
    </>
  );
}
