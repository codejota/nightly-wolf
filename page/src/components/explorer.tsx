import { useTheme } from "./themes/theme-context";
import { ChevronDown, File, Folder } from "lucide-react";

export function Explorer() {
  const { theme } = useTheme();

  return (
    <div
      className="w-64 border-r overflow-auto"
      style={{
        backgroundColor: theme.editorBackground,
        borderColor: theme.tabBorder || "transparent",
      }}
    >
      <div className="p-2">
        <h2
          className="text-sm font-semibold mb-2"
          style={{ color: theme.editorForeground }}
        >
          EXPLORER
        </h2>
        <div className="flex items-center mb-2">
          <ChevronDown
            className="w-4 h-4 mr-1"
            style={{ color: theme.editorForeground }}
          />
          <span className="text-sm" style={{ color: theme.editorForeground }}>
            PORTFOLIO
          </span>
        </div>
        <div className="ml-4">
          <div className="flex items-center mb-1">
            <File
              className="w-4 h-4 mr-1"
              style={{ color: theme.editorForeground }}
            />
            <span className="text-sm" style={{ color: theme.editorForeground }}>
              index.js
            </span>
          </div>
          <div className="flex items-center mb-1">
            <File
              className="w-4 h-4 mr-1"
              style={{ color: theme.editorForeground }}
            />
            <span className="text-sm" style={{ color: theme.editorForeground }}>
              about.js
            </span>
          </div>
          <div className="flex items-center mb-1">
            <Folder
              className="w-4 h-4 mr-1"
              style={{ color: theme.editorForeground }}
            />
            <span className="text-sm" style={{ color: theme.editorForeground }}>
              projects
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
