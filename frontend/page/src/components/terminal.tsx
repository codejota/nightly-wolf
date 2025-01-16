"use client";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "./themes/theme-context";

export function Terminal() {
  const { theme } = useTheme();
  const [output, setOutput] = useState<string[]>([
    "Welcome to the Portfolio Terminal!",
  ]);
  const [input, setInput] = useState("");
  const terminalRef = useRef<HTMLDivElement>(null);

  const executeCommand = (command: string) => {
    switch (command.toLowerCase()) {
      case "hello":
        return "Hello! Welcome to my portfolio.";
      case "projects":
        return "My projects: 1. Web App, 2. Mobile App, 3. AI Project";
      case "skills":
        return "My skills: JavaScript, React, Node.js, Python";
      default:
        return `Command not recognized: ${command}`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const result = executeCommand(input);
    setOutput((prev) => [...prev, `> ${input}`, result]);
    setInput("");
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div
      className="h-48 border-t"
      style={{
        backgroundColor: theme.editorBackground,
        borderColor: theme.tabBorder || "transparent",
      }}
    >
      <div
        className="flex items-center h-9 px-3 border-b"
        style={{
          backgroundColor: theme.titleBarActiveBackground,
          borderColor: theme.tabBorder || "transparent",
        }}
      >
        <span
          className="text-sm"
          style={{ color: theme.titleBarActiveForeground }}
        >
          Terminal
        </span>
      </div>
      <div
        ref={terminalRef}
        className="h-[calc(100%-36px)] p-2 overflow-auto font-mono text-sm"
        style={{ color: theme.editorForeground }}
      >
        {output.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        <form onSubmit={handleSubmit} className="mt-2 flex">
          <span className="mr-2">{">"}</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none"
            style={{ color: theme.editorForeground }}
            placeholder="Type a command (e.g., 'hello', 'projects', 'skills')"
          />
        </form>
      </div>
    </div>
  );
}
