import { useTheme } from "./themes/theme-context";

export function Tabs() {
  const { theme } = useTheme();

  return (
    <div
      className="h-9 flex items-center border-b px-2"
      style={{
        backgroundColor: theme.tabsContainerBackground,
        borderColor: theme.tabsContainerBorder || "transparent",
      }}
    >
      <div
        className="px-3 py-1 text-sm relative"
        style={{
          backgroundColor: theme.tabActiveBackground,
          color: theme.tabActiveForeground,
          borderColor: theme.tabBorder,
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{ backgroundColor: theme.tabActiveBorderTop }}
        />
        index.js
      </div>
    </div>
  );
}
