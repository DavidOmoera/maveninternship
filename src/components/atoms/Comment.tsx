import React from "react";
import { ReactDOM } from "react-dom/client";

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

  function createFeedback(type: Comment){
    fetch('https://demo.coterie.ai/api/feedback/?skip=0&limit=100')
      .then((response => response.json()))
      .then((data) => Comment(data))
  }
  