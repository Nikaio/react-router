import { useEffect, useState } from "react";
import { ThemeContext } from "./useTheme";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    let themeLink = document.getElementById("theme-link");
    if (!themeLink) {
      themeLink = document.createElement("link");
      themeLink.id = "theme-link";
      themeLink.rel = "stylesheet";
      document.head.appendChild(themeLink);
    }
    themeLink.href =
      theme === "dark"
        ? "/themes/lara-dark-indigo/theme.css"
        : "/themes/lara-light-indigo/theme.css";
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
