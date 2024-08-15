import { TCustomStylesCreatorParams } from "./types";

export const customStyleCreator = ({
  error,
  color,
  height,
  padding,
  warning,
  fontFamily,
  borderWidth,
  iconPadding,
  borderRadius,
  backgroundColor,
  placeHolderColor,
}: TCustomStylesCreatorParams) => {
  return {
    borderRadius: "10px",
    width: "100%",

    "& .MuiInputBase-root": {
      paddingRight: `${iconPadding} !important`,
    },

    "& .MuiFormLabel-root": {
      lineHight: "normal !important",
    },

    borderColor: warning
      ? "#FFCC00 !important"
      : error
      ? "#FF3333"
      : "transparent",
    color,
    borderWidth,

    "& .MuiInputBase-input": {
      fontFamily,
    },

    "& .MuiOutlinedInput-root": {
      borderColor: "transparent",
      lineHeight: "normal !important",
      height: "unset !important",
      backgroundColor: `${backgroundColor} !important`,
      borderRadius: borderRadius || "10px",

      "& input": {
        padding,
        height,
        fontFamily,

        "::placeholder": {
          color: placeHolderColor,
        },
      },

      "& input:-webkit-autofill": {
        WebkitBoxShadow:
          "0 0 0px 1000px " + (backgroundColor || "#f2f2f2") + " inset",
        WebkitTextFillColor: color || "inherit",
      },

      "& fieldset": {
        borderColor: "#C0C0C0",
        borderWidth: "1px !important",
      },

      "& .MuiAutocomplete-clearIndicator": {
        display: "none !important",
      },

      "& .Mui-focused fieldset": {
        borderColor: "#2067dd",
        borderWidth: "1px",
      },

      "& .Mui-error fieldset": {
        borderColor: "red",
      },

      "& .Mui-disabled fieldset": {
        border: "none",
      },
    },
  };
};
