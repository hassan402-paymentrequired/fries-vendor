import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";

const ProductIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24} // Explicit width
    height={24} // Explicit height
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24" // Ensure viewBox is present
    {...props} // Spread props to allow customization
  >
    <Rect width={7} height={7} x={3} y={3} rx={1} />
    <Rect width={7} height={7} x={3} y={14} rx={1} />
    <Path d="M14 4h7M14 9h7M14 15h7M14 20h7" />
  </Svg>
);

export default ProductIcon;
