import { TSVGProps } from "types/common";

export function ArrowRight({
  color = "white",
  width = 16,
  height = 17,
  ...props
}: TSVGProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 17"
      fill="none"
      {...props}
    >
      <path
        d="M9.61984 4.45312L13.6665 8.49979L9.61984 12.5465"
        stroke={color}
        strokeWidth="1.125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.33322 8.5H13.5532"
        stroke={color}
        strokeWidth="1.125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
