"use client";

import { useTheme } from "./themes/theme-context";

export function StatusBar() {
  const { theme } = useTheme();

  return (
    <div
      className="h-6 px-2 flex items-center text-xs border-t"
      style={{
        backgroundColor: theme.statusBarBackground,
        borderColor: theme.statusBarBorder || "transparent",
        color: theme.statusBarForeground,
      }}
    >
      JavaScript
    </div>
  );
}
