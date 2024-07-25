import { colors } from "constants/common";
import { TSVGProps } from "types/common";

export function Dislike({
  width = 24,
  height = 24,
  color = colors.neutral950,
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
        d="M16.5197 5.64999L13.4197 3.24999C13.0197 2.84999 12.1197 2.64999 11.5197 2.64999H7.71973C6.51973 2.64999 5.21973 3.54999 4.91973 4.74999L2.51973 12.05C2.01973 13.45 2.91973 14.65 4.41973 14.65H8.41973C9.01973 14.65 9.51973 15.15 9.41973 15.85L8.91973 19.05C8.71973 19.95 9.31973 20.95 10.2197 21.25C11.0197 21.55 12.0197 21.15 12.4197 20.55L16.5197 14.45"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M21.6191 5.65V15.45C21.6191 16.85 21.0191 17.35 19.6191 17.35H18.6191C17.2191 17.35 16.6191 16.85 16.6191 15.45V5.65C16.6191 4.25 17.2191 3.75 18.6191 3.75H19.6191C21.0191 3.75 21.6191 4.25 21.6191 5.65Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
