"use client";
import { useState } from "react";

import { SVGLetter } from "./SvgLetter";

// Letter patterns as constants
const LETTER_PATTERNS = {
  S: [
    [0, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 0],
  ],
  R: [
    [0, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 1, 0, 0],
  ],
  B: [
    [0, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 0, 0],
  ],
};

const LETTER_WIDTH = 80;

// Helper function to render letters in SVG
const renderLetters = (
  letterSpacing: number,
  LetterComponent: React.ComponentType<{
    pattern: number[][];
    x?: number;
    y?: number;
  }>
) => {
  return (
    <>
      <LetterComponent pattern={LETTER_PATTERNS.S} x={0} y={0} />
      <LetterComponent
        pattern={LETTER_PATTERNS.R}
        x={LETTER_WIDTH + letterSpacing}
        y={0}
      />
      <LetterComponent
        pattern={LETTER_PATTERNS.B}
        x={(LETTER_WIDTH + letterSpacing) * 2}
        y={0}
      />
    </>
  );
};

// mark to full logo with animation
export const SrbBrandmark = () => {
  const [hovered, setHovered] = useState(false);
  const letterSpacing = hovered ? 24 : -80;

  return (
    <svg
      width={LETTER_WIDTH * 3 + letterSpacing * 2}
      height={LETTER_WIDTH}
      viewBox={`0 0 ${LETTER_WIDTH * 3 + letterSpacing * 2} ${LETTER_WIDTH}`}
      className="block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {renderLetters(letterSpacing, SVGLetter)}
    </svg>
  );
};

// close logo only mark
export const SrbMark = (props: React.ComponentProps<"svg">) => {
  const letterSpacing = -80;

  return (
    <svg
      width={LETTER_WIDTH * 3 + letterSpacing * 2}
      height={LETTER_WIDTH}
      viewBox={`0 0 ${LETTER_WIDTH * 3 + letterSpacing * 2} ${LETTER_WIDTH}`}
      className={["block", props.className].filter(Boolean).join(" ")}
      {...props}
    >
      {renderLetters(letterSpacing, SVGLetter)}
    </svg>
  );
};

// full logo <Mark> srb.codes
export const SrbWordmark = () => {
  const letterSpacing = 12;

  return (
    <svg
      width={LETTER_WIDTH * 3 + letterSpacing * 2}
      height={LETTER_WIDTH}
      viewBox={`0 0 ${LETTER_WIDTH * 3 + letterSpacing * 2} ${LETTER_WIDTH}`}
    >
      {renderLetters(letterSpacing, SVGLetter)}
    </svg>
  );
};

// Helper component for outline letters
const SVGLetterOutline = ({
  pattern,
  x = 0,
  y = 0,
}: {
  pattern: number[][];
  x?: number;
  y?: number;
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
  const letterSpacing = 12;

  return (
    <svg
      width={LETTER_WIDTH * 3 + letterSpacing * 2}
      height={LETTER_WIDTH}
      viewBox={`0 0 ${LETTER_WIDTH * 3 + letterSpacing * 2} ${LETTER_WIDTH}`}
    >
      {renderLetters(letterSpacing, SVGLetterOutline)}
    </svg>
  );
};
