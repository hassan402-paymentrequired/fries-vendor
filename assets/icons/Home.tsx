import React from "react";
import Svg, { SvgProps, Path, Rect } from "react-native-svg";

const HomeIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24} // Default width
    height={24} // Default height
    fill="none" // No fill color by default
    stroke="currentColor" // Stroke color
    strokeLinecap="round" // Rounded line caps
    strokeLinejoin="round" // Rounded line joins
    strokeWidth={2} // Line thickness
    viewBox="0 0 24 24" // Ensure proper scaling
    {...props} // Spread props for customizability
  >
    <Rect width={20} height={5} x={2} y={3} rx={1} />
    <Path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8M10 12h4" />
  </Svg>
);

export default HomeIcon;
