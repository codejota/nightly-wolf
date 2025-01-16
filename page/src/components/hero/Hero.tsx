import clsx from "clsx";

import styles from "./Hero.module.scss";

interface HeroProps {
  title: React.ReactNode;
  description: React.ReactNode;
  size: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

export const Hero = ({ title, description, size, children }: HeroProps) => {
  const sizeClasses = clsx(
    {
      "py-32": size === "sm",
      "py-48": size === "md",
      "py-32 md:py-48 lg:py-64": size === "lg",
    },
    styles.bgGrid
  );
  return (
    <div className={`w-full relative ${sizeClasses}`}>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-400/15 via-transparent to-background" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent" />
      <div className="container relative">
        <div className="relative flex flex-col items-center justify-center text-center text-gray-800 dark:text-indigo-50">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 sm:text-7xl mb-2">
            {title}
          </h1>
          <div
            className="max-w-2xl m-auto text-xl text-zinc-300 sm:text-2xl leading-relaxed text-lg text-pretty"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {description}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Hero;
