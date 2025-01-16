"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { nightlyWolfTheme } from "./nightlywolf-theme";
import { nightlyWolfSoftTheme } from "./nightlywolf-theme-soft";
import { nightlyWolfWhiteTheme } from "./nightlywolf-theme-white";
import { Theme } from "./theme-types";

const themes = {
  nightlywolf: nightlyWolfTheme,
  "nightlywolf-soft": nightlyWolfSoftTheme,
  "nightlywolf-white": nightlyWolfWhiteTheme,
} as const;

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: keyof typeof themes) => void;
  availableThemes: typeof themes;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(themes.nightlywolf);

  const setTheme = (themeName: keyof typeof themes) => {
    setThemeState(themes[themeName]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, availableThemes: themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
