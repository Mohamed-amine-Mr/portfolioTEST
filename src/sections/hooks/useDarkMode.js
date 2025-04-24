import { useState, useEffect } from "react";

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage and system preference on initial load
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return savedMode ? JSON.parse(savedMode) : prefersDark;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    // Save preference to localStorage
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
}
