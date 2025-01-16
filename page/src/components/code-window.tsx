import { useTheme } from "./themes/theme-context";
import SyntaxHighlighter from "react-syntax-highlighter";
import dracula from "react-syntax-highlighter/dist/esm/styles/prism/dracula";

export function CodeWindow() {
  const { theme } = useTheme();

  const code = `function Portfolio() {
  return (
    <div>
      <h1>Welcome to my Portfolio</h1>
      <p>Here are some of my projects:</p>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
    </div>
  )
}`;

  return (
    <div
      className="flex-1 overflow-auto"
      style={{
        backgroundColor: theme.editorBackground,
        color: theme.editorForeground,
      }}
    >
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        customStyle={{
          margin: 0,
          padding: "1rem",
          backgroundColor: "transparent",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
