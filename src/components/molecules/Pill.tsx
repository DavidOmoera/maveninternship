import { ReactNode } from "react";

type TPillProps = {
  text: string;
} & Partial<{
  icon: ReactNode;
  containerClassName: string;
  textClass: string;
  textColor: string;
  secondText: string;
  secondTextClass: string;
  secondTextColor: string;
}>;

export function Pill({
  text,
  icon,
  textClass = "font-semibold text-primary text-base",
  secondText,
  secondTextClass = "font-bold text-primary text-base",
  containerClassName = "row items-center rounded-[2.37rem] px-3 py-2 gap-1 bg-accent50",
}: TPillProps) {
  return (
    <div className={containerClassName}>
      {icon ?? null}
      <h6 className={textClass}>{text}</h6>
      {secondText ? <h6 className={secondTextClass}>{secondText}</h6> : null}
    </div>
  );
}
