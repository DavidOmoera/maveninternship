import React from "react";

type TButtonVariant = "primary" | "secondary";
type TButtonProps = {
  variant?: TButtonVariant;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  text?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

function getClassNameFromType(type: TButtonVariant) {
  switch (type) {
    case "primary":
      return { button: "btn-primary", text: "btn-primary-text" };
    default:
      return { button: "btn-secondary", text: "btn-secondary-text" };
  }
}

export function Button({
  variant = "primary",
  leftIcon,
  rightIcon,
  text,
  children,
  className = "",
  ...props
}: TButtonProps) {
  const typeClassName = getClassNameFromType(variant);
  const hasIcon = !!leftIcon || !!rightIcon;

  return (
    <button className={`btn ${typeClassName.button} ${className}`} {...props}>
      {children ?? (
        <div className={`row items-center ${hasIcon ? "gap-2" : ""}`}>
          {leftIcon ?? null}
          <h6 className={typeClassName.text}>{text}</h6>
          {rightIcon ?? null}
        </div>
      )}
    </button>
  );
}
