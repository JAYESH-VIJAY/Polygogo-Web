import { ReactNode } from "react";

interface SvgPropsTypes {
  width: string | number;
  height: string | number;
  fill?: string;
  children: ReactNode;
}
export default function Svg({
  width,
  height,
  fill = "none",
  children,
}: SvgPropsTypes) {
  return (
    <>
      <svg
        width={width}
        height={height}
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </svg>
    </>
  );
}
