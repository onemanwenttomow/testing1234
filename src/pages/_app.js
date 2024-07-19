import PageFooter from "@/components/menu/PageFooter";
import PageHeader from "@/components/menu/PageHeader";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "@/util/ThemeConfig";

// Import Icons
import IconUp from "/public/assets/icons/arrow_drop_up.svg";

const ScrollToTopButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f6f6f9;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;

  svg {
    fill: black;
    width: 40px;
    height: 40px;
    padding: 0;
  }

  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`;

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme-preference");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(systemPrefersDark ? "dark" : "light");
    }

    window.addEventListener("scroll", handleScroll);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleSystemThemeChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 100);
  };

  const handleSystemThemeChange = (e) => {
    const newTheme = e.matches ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme-preference", newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme-preference", newTheme);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <PageHeader toggleTheme={toggleTheme} theme={theme} />

      <Component {...pageProps} theme={theme} />
      <PageFooter />
      {isVisible && (
        <ScrollToTopButton onClick={scrollToTop}>
          <IconUp />
        </ScrollToTopButton>
      )}
    </ThemeProvider>
  );
}
