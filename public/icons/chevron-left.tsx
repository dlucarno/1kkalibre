import { FunctionComponent } from "react";
import { IconProps } from "../../lib/@types";

const ChevronLeft: FunctionComponent<IconProps> = ({
  size,
  color,
  ...rest
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width={size}
    height={size}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 16 16"
    {...rest}
  >
    <g fill={color}>
      <path
        fillRule="evenodd"
        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
      />
    </g>
  </svg>
);

export default ChevronLeft;
