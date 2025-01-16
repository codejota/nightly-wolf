import { Code, User, Settings } from "lucide-react";
import { useTheme } from "./themes/theme-context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ActivityBar() {
  const { theme } = useTheme();

  return (
    <div
      className="w-16 flex flex-col items-center py-4 border-r"
      style={{
        backgroundColor: theme.activityBarBackground,
        borderColor: theme.activityBarBorder || "transparent",
      }}
    >
      <Avatar className="w-10 h-10 mb-4">
        <AvatarImage src="https://github.com/codejota.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <button
        className="p-2 mb-2 relative group"
        style={{ color: theme.activityBarForeground }}
      >
        <div
          className="absolute left-0 w-0.5 h-full"
          style={{ backgroundColor: theme.activityBarActiveBorder }}
        />
        <Code className="w-6 h-6" />
      </button>
      <button
        className="p-2 mb-2"
        style={{ color: theme.activityBarInActiveForeground }}
      >
        <User className="w-6 h-6" />
      </button>
      <button
        className="p-2"
        style={{ color: theme.activityBarInActiveForeground }}
      >
        <Settings className="w-6 h-6" />
      </button>
    </div>
  );
}
