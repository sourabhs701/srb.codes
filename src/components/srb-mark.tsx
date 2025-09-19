"use client";
import { useState } from "react";

import { SVGLetter } from "./SvgLetter";

// mark to full logo with animation
export const SrbBrandmark = () => {
  const letterS = [
    [0, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 0],
  ];

  const letterR = [
    [0, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 1, 0, 0],
  ];

  const letterB = [
    [0, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 0, 0],
  ];

  const letterWidth = 80;
  const [hovered, setHovered] = useState(false);
  const letterSpacing = hovered ? 24 : -80;

  return (
    <svg
      width={letterWidth * 3 + letterSpacing * 2}
      height={letterWidth}
      viewBox={`0 0 ${letterWidth * 3 + letterSpacing * 2} ${letterWidth}`}
      className="block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <SVGLetter pattern={letterS} x={0} y={0} />
      <SVGLetter pattern={letterR} x={letterWidth + letterSpacing} y={0} />
      <SVGLetter
        pattern={letterB}
        x={(letterWidth + letterSpacing) * 2}
        y={0}
      />
    </svg>
  );
};

// close logo only mark
export const SrbMark = (props: React.ComponentProps<"svg">) => {
  const letterS = [
    [0, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 0],
  ];

  const letterR = [
    [0, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 1, 0, 0],
  ];

  const letterB = [
    [0, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 0, 0],
  ];

  const letterWidth = 80;
  const letterSpacing = -80;

  return (
    <svg
      width={letterWidth * 3 + letterSpacing * 2}
      height={letterWidth}
      viewBox={`0 0 ${letterWidth * 3 + letterSpacing * 2} ${letterWidth}`}
      className={["block", props.className].filter(Boolean).join(" ")}
      {...props}
    >
      <SVGLetter pattern={letterS} x={0} y={0} />
      <SVGLetter pattern={letterR} x={letterWidth + letterSpacing} y={0} />
      <SVGLetter
        pattern={letterB}
        x={(letterWidth + letterSpacing) * 2}
        y={0}
      />
    </svg>
  );
};

// full logo <Mark> srb.codes
export const SrbWordmark = () => {
  const letterS = [
    [0, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 0],
  ];

  const letterR = [
    [0, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 1, 0, 0],
  ];

  const letterB = [
    [0, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 0, 0],
  ];

  const letterWidth = 80;
  const letterSpacing = 12;

  return (
    <svg
      width={letterWidth * 3 + letterSpacing * 2}
      height={letterWidth}
      viewBox={`0 0 ${letterWidth * 3 + letterSpacing * 2} ${letterWidth}`}
    >
      <SVGLetter pattern={letterS} x={0} y={0} />
      <SVGLetter pattern={letterR} x={letterWidth + letterSpacing} y={0} />
      <SVGLetter
        pattern={letterB}
        x={(letterWidth + letterSpacing) * 2}
        y={0}
      />
    </svg>
  );
};

// Helper component for outline letters
const SVGLetterOutline = ({
  pattern,
  x,
  y,
}: {
  pattern: number[][];
  x: number;
  y: number;
}) => {
  const cellSize = 10;

  return (
    <>
      {pattern.map((row, rowIndex) =>
        row.map((cell, colIndex) =>
          cell === 1 ? (
            <rect
              key={`${rowIndex}-${colIndex}`}
              x={x + colIndex * cellSize}
              y={y + rowIndex * cellSize}
              width={cellSize}
              height={cellSize}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
            />
          ) : null
        )
      )}
    </>
  );
};

// Full outline logo <Mark> srb.codes
export const SrbWordmarkOutline = () => {
  const letterS = [
    [0, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 0],
  ];

  const letterR = [
    [0, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 1, 0, 0],
  ];

  const letterB = [
    [0, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 0, 0],
  ];

  const letterWidth = 80;
  const letterSpacing = 12;

  return (
    <svg
      width={letterWidth * 3 + letterSpacing * 2}
      height={letterWidth}
      viewBox={`0 0 ${letterWidth * 3 + letterSpacing * 2} ${letterWidth}`}
    >
      <SVGLetterOutline pattern={letterS} x={0} y={0} />
      <SVGLetterOutline
        pattern={letterR}
        x={letterWidth + letterSpacing}
        y={0}
      />
      <SVGLetterOutline
        pattern={letterB}
        x={(letterWidth + letterSpacing) * 2}
        y={0}
      />
    </svg>
  );
};
