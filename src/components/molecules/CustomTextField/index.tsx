import React, { forwardRef, useState } from "react";
import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import ErrorMessage from "../ErrorMessage";

import { customStyleCreator } from "./styles";
import { TChangeInputEvent, TCustomTextFieldProps } from "./types";
import { colors, DEFAULT_FONT_NAME } from "constants/common";

const CustomTextField: React.FC<TCustomTextFieldProps> = forwardRef<
  HTMLInputElement,
  TCustomTextFieldProps
>(
  (
    {
      color,
      error,
      value,
      height,
      warning,
      padding,
      maxWidth,
      leftIcon,
      disabled,
      children,
      onChange,
      rightIcon,
      iconPadding,
      borderWidth,
      backgroundColor,
      autoFocus = false,
      readOnly = false,
      required = false,
      containerClasses,
      placeHolderColor,
      borderRadius = "5px",
      onEndAdornmentClick,
      onStartAdornmentClick,
      withHelperText = true,
      borderColor = "transparent",
      fontFamily = DEFAULT_FONT_NAME,
      ...props
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState<string>("");
    const darkMode = false;
    const defaultBackgroundColor = darkMode
      ? colors.dark_mode_bg
      : colors.white;

    const customStyle = customStyleCreator({
      error,
      warning,
      borderColor,
      color: color as string,
      height: height as string,
      padding: padding as string,
      fontFamily: fontFamily as string,
      borderWidth: borderWidth as string,
      iconPadding: iconPadding as string,
      borderRadius: borderRadius as string,
      backgroundColor: backgroundColor as string,
      placeHolderColor: placeHolderColor as string,
    });

    const containerStyle: React.CSSProperties = {
      maxWidth: maxWidth || "100%",
      width: "100%",
      position: "relative",
    };

    const helperTextStyle: React.CSSProperties = {
      color: warning ? "#FFCC00" : "#FF3333",
      display: "none",
    };

    const handleChange = (event: TChangeInputEvent) => {
      if (onChange) {
        onChange(event);
      } else {
        setInputValue(event.target.value);
      }
    };

    return (
      <div
        style={containerClasses ? undefined : containerStyle}
        className={containerClasses}
      >
        {withHelperText && (error || warning) && (
          <ErrorMessage message={props?.helperText as string} />
        )}
        <TextField
          {...props}
          autoComplete="off"
          sx={{
            ...customStyle,
            " input": {
              fontSize: "16px",
              borderRadius: borderRadius,
              cursor: disabled ? "not-allowed !important" : "text",
              ...(color
                ? { color }
                : { color: darkMode ? colors.white : colors.black }),
              ...(backgroundColor
                ? {}
                : { backgroundColor: defaultBackgroundColor }),
            },
            " .MuiFormControl-root": {
              padding: padding,
            },
            " .MuiInputBase-root": { padding: "" },

            fieldset: {
              border: error
                ? "1px solid red !important"
                : darkMode
                ? "1px solid #6b7280 !important"
                : "1px solid #EDEFF1",
              borderWidth: "1px !important",
            },

            label: {
              fontFamily: `${fontFamily} !important`,
              color: darkMode ? colors.white : colors.enigmatic_midnight,
            },

            "&:hover fieldset": {
              borderColor: darkMode
                ? "#ffffff !important"
                : "#2067dd !important",
            },
            ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled":
              {
                "-webkit-text-fill-color": darkMode ? "#ffffff !important" : "",
              },

            "& .MuiOutlinedInput-input:focus": {
              borderColor: "green !important",
              "&:focus-within": {
                outline: "none !important",
              },
            },
          }}
          InputLabelProps={{
            style: {
              fontFamily: DEFAULT_FONT_NAME,
              color: darkMode ? colors.white : colors.enigmatic_midnight,
            },
          }}
          required={required}
          autoFocus={autoFocus || !!error}
          error={error}
          value={value || inputValue}
          onChange={handleChange}
          helperText={
            (withHelperText && error) || warning ? "Incorrect entry." : ""
          }
          FormHelperTextProps={{ style: helperTextStyle }}
          InputProps={{
            readOnly,
            sx: {
              borderRadius,
              cursor: "pointer",
            },
            startAdornment: leftIcon && (
              <InputAdornment position="start" onClick={onStartAdornmentClick}>
                {leftIcon}
              </InputAdornment>
            ),
            endAdornment: rightIcon && (
              <InputAdornment position="end" onClick={onEndAdornmentClick}>
                {rightIcon}
              </InputAdornment>
            ),
          }}
          placeholder={props.placeholder ?? props.label}
          ref={ref}
        />
        {children}
      </div>
    );
  }
);

export default CustomTextField;
