import classNames from "classnames";
import { colors } from "constants/common";
import { ReactNode, useMemo } from "react";

export type TTabProps = {
  onClickTab: (value: string) => void;
  isActive: boolean;
  value: string;
} & Partial<{
  leftIcon: ReactNode;
  rightIcon: ReactNode;
  label: string;
  activeColor: string;
  inactiveColor: string;
  labelClassName: string;
}>;

export function Tab({
  leftIcon,
  rightIcon,
  label,
  value,
  isActive = false,
  activeColor = colors.primary,
  inactiveColor = colors.neutral500,
  labelClassName,
  onClickTab,
}: TTabProps) {
  const color = useMemo(
    () => (isActive ? activeColor : inactiveColor),
    [isActive, activeColor, inactiveColor]
  );

  return (
    <div
      role="tab"
      className="row px-3 pb-2 gap-2 items-center cursor-pointer"
      style={{ borderBottomWidth: isActive ? 3 : 0, borderBottomColor: color }}
      onClick={() => onClickTab(value)}
    >
      {leftIcon ?? null}
      {label ? (
        <h6
          className={classNames("", {
            "font-medium text-sm": !labelClassName,
            [`${labelClassName}`]: !!labelClassName,
          })}
          style={{ color }}
        >
          {label}
        </h6>
      ) : null}
      {rightIcon ?? null}
    </div>
  );
}
