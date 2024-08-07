import { colors } from "constants/common";
import { TSVGProps } from "types/common";

export function Social({
  width = 24,
  height = 24,
  color = "#FFC700",
  fillColor = colors.accent800,
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
      <rect width={width} height={height} rx="4" fill={color} />
      <path
        d="M13.2311 12.0041C13.2311 14.9769 10.8376 17.3868 7.88518 17.3868C4.93277 17.3868 2.53906 14.9769 2.53906 12.0041C2.53906 9.03122 4.93259 6.62109 7.88518 6.62109C10.8378 6.62109 13.2311 9.03122 13.2311 12.0041Z"
        fill={fillColor}
      />
      <path
        d="M19.0961 12.0042C19.0961 14.8024 17.8994 17.0718 16.4231 17.0718C14.9468 17.0718 13.75 14.8024 13.75 12.0042C13.75 9.20588 14.9466 6.93652 16.4229 6.93652C17.8992 6.93652 19.0959 9.20515 19.0959 12.0042"
        fill={fillColor}
      />
      <path
        d="M21.4953 12.0037C21.4953 14.5102 21.0745 16.5435 20.5552 16.5435C20.0359 16.5435 19.6152 14.5108 19.6152 12.0037C19.6152 9.49655 20.0361 7.46387 20.5552 7.46387C21.0743 7.46387 21.4953 9.49637 21.4953 12.0037Z"
        fill={fillColor}
      />
    </svg>
  );
}
