import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const STORAGE_KEY = "theme";
const THEME_COLORS = { dark: "#05060a", light: "#f7f8fc" };

const readSavedTheme = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", THEME_COLORS[theme]);
};

// The first theme is set by the inline script in public/index.html, so the page
// never flashes the wrong colors while loading.
const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "dark"
  );

  // Follow the system setting until the visitor makes their own choice
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const handleChange = (e) => {
      if (readSavedTheme()) return;
      const next = e.matches ? "light" : "dark";
      applyTheme(next);
      setTheme(next);
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be blocked. The theme still changes for this visit.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="icon-btn !h-9 !w-9 hover:!translate-y-0"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
