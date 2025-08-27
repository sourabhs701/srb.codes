interface SVGLetterProps {
  pattern: number[][];
  x?: number;
  y?: number;
}

export const SVGLetter: React.FC<SVGLetterProps> = ({
  pattern,
  x = 0,
  y = 0,
}) => {
  const pixels = [];

  for (let row = 0; row < pattern.length; row++) {
    for (let col = 0; col < pattern[row].length; col++) {
      if (pattern[row][col] === 1) {
        pixels.push(
          <rect
            key={`${row}-${col}`}
            x={x + col * 12}
            y={y + row * 12}
            width="12"
            height="12"
            fill="currentColor"
          />
        );
      }
    }
  }

  return <>{pixels}</>;
};
