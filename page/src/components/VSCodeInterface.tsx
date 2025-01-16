"use client";

import { useTheme } from "./themes/theme-context";
import { ActivityBar } from "./activity-bar";
import { Explorer } from "./explorer";
import { Tabs } from "./tabs";
import { CodeWindow } from "./code-window";
import { Terminal } from "./terminal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function VSCodeInterface() {
  const { theme, setTheme, availableThemes } = useTheme();

  return (
    <div className="h-[600px] w-full max-w-4xl mx-auto border border-gray-300 rounded-lg overflow-hidden shadow-lg">
      <div className="flex flex-col h-full">
        <div
          className="flex items-center justify-between h-9 px-3"
          style={{ backgroundColor: theme.titleBarActiveBackground }}
        >
          <span
            className="text-sm"
            style={{ color: theme.titleBarActiveForeground }}
          >
            Portfolio - VS Code
          </span>
          <Select onValueChange={setTheme} defaultValue="nightlywolf">
            <SelectTrigger className="h-7 w-40 text-xs border-0">
              <SelectValue placeholder="Select theme" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(availableThemes).map(([key, theme]) => (
                <SelectItem key={key} value={key}>
                  {theme.displayName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1 flex overflow-hidden">
          <ActivityBar />
          <Explorer />
          <div className="flex-1 flex flex-col">
            <Tabs />
            <CodeWindow />
            <Terminal />
          </div>
        </div>
      </div>
    </div>
  );
}
