import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Al iniciar la app
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme_mode");

    if (!storedTheme) {
      // Si no existe → crear por defecto
      localStorage.setItem("theme_mode", "light");
      setTheme("light");
    } else {
      setTheme(storedTheme);
    }
  }, []);

  // Aplicar clase dark a <html>
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme_mode", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook limpio
export function useTheme() {
  return useContext(ThemeContext);
}
