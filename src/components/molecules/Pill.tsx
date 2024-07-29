import { ReactNode } from "react";

type TPillProps = {
  text: string;
} & Partial<{
  icon: ReactNode;
  rightIcon: ReactNode;
  containerClassName: string;
  textClass: string;
  textColor: string;
  secondText: string;
  secondTextClass: string;
  secondTextColor: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}>;

export function Pill({
  text,
  icon,
  rightIcon,
  textClass = "font-semibold text-primary text-base",
  secondText,
  secondTextClass = "font-bold text-primary text-base",
  containerClassName = "row items-center rounded-[2.37rem] px-3 py-2 gap-1 bg-accent50",
  onClick,
}: TPillProps) {
  return (
    <div className={containerClassName} onClick={onClick}>
      {icon ?? null}
      <h6 className={textClass}>{text}</h6>
      {secondText ? <h6 className={secondTextClass}>{secondText}</h6> : null}
      {rightIcon ?? null}
    </div>
  );
}
