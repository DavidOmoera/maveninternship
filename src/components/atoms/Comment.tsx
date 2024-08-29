import React from "react";

type TCommentVariant = "primary" | "secondary";

type TCommentVariantProps = {
  variant?: TCommentVariant;
  text: string;
  label?: string;
  labelClassName: string;
  description: string;
};

export function Comment({
    text,
    label,
    description
  }: TCommentVariantProps) {
    return (
      <input>
        <article>
        {label ? (
          <h3 className="text-neutral950 text-2xl font-extrabold">
          </h3>
        ) : null}
          <p>
            {text}
            {description}
          </p>
        </article>
      </input>
    );
  }
  