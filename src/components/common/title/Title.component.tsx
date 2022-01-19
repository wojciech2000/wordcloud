import clsx from "clsx";
import React, { ReactNode } from "react";

const sizes = ["16", "24", "30", "36", "48"] as const;

type Sizes = typeof sizes[number];

interface ITitleProps {
  size?: Sizes;
  className?: string;
  children: ReactNode;
}

// Set head tag dynamicly depending on of passed size order in 'sizes' array
const setHeadingTag = (size: Sizes) => {
  const MAX_HEADING_TAG_NUMBER = 6;

  const sizesToNumbers = sizes.map(size => +size);
  const sortDESC = sizesToNumbers.sort((a, b) => b - a);

  const headingTags = sortDESC.map((size, index) => {
    index++;
    const headingNumber = index <= MAX_HEADING_TAG_NUMBER ? index : MAX_HEADING_TAG_NUMBER;

    return {
      size,
      headingNumber,
    };
  });

  const selectedSize = headingTags.find(headingTag => headingTag.size === +size);

  return selectedSize?.headingNumber || MAX_HEADING_TAG_NUMBER;
};

const Title: React.FC<ITitleProps> = ({ size = "24", className, children }) => {
  const Heading = `h${setHeadingTag(size)}` as keyof JSX.IntrinsicElements;

  return (
    <Heading
      className={clsx(
        "font-bold",

        {
          // FONT-SIZE
          "text-base md:text-xl": size === "16",
          "text-2xl md:text-3xl": size === "24",
          "text-3xl md:text-4xl": size === "30",
          "text-4xl md:text-6xl": size === "36",
          "text-5xl md:text-7xl": size === "48",
        },
        className,
      )}
    >
      {children}
    </Heading>
  );
};

export default Title;
