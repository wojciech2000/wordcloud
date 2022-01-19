import clsx from "clsx";
import React, { ReactNode } from "react";

type Sizes = "12" | "16" | "20" | "24";
export type Colors = "black" | "white" | "error";

interface ITitleProps {
  size?: Sizes;
  color?: Colors;
  className?: string;
  children: ReactNode;
}

const Text: React.FC<ITitleProps> = ({ size = "16", color = "black", className, children }) => (
  <p
    className={clsx(
      {
        // FONT-SIZE
        "text-xs": size === "12",
        "text-base": size === "16",
        "text-xl": size === "20",
        "text-2xl md:text-3xl": size === "24",

        // COLOR
        "text-black": color === "black",
        "text-white": color === "white",
        "text-error": color === "error",
      },
      className,
    )}
  >
    {children}
  </p>
);

export default Text;
