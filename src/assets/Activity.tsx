import { colors } from "constants/common";
import { TSVGProps } from "types/common";

export function Activity({
  width = 24,
  height = 24,
  color = colors.neutral500,
  ...props
}: TSVGProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.33008 14.49L9.71008 11.4C10.0501 10.96 10.6801 10.88 11.1201 11.22L12.9501 12.66C13.3901 13 14.0201 12.92 14.3601 12.49L16.6701 9.51001"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
