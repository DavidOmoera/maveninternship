import React from "react";

type TButtonVariant = "primary" | "secondary";
type TButtonProps = {
  variant?: TButtonVariant;
  icon?: React.ReactNode;
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
  icon,
  text,
  children,
  className = "",
  ...props
}: TButtonProps) {
  const typeClassName = getClassNameFromType(variant);

  return (
    <button className={`btn ${typeClassName.button} ${className}`} {...props}>
      {children ?? (
        <div className={`flex flex-row ${icon ? "gap-2" : ""}`}>
          {icon ?? null} <h4 className={typeClassName.text}>{text}</h4>
        </div>
      )}
    </button>
  );
}
