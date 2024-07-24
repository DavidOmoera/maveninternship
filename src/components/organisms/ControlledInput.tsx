import {
  Control,
  Controller,
  FieldError,
  FieldErrors,
  FieldValues,
} from "react-hook-form";
import { TCustomTextFieldProps } from "../molecules/CustomTextField/types";
import CustomTextField from "../molecules/CustomTextField";
import { colors } from "constants/common";

type TControlledInputProps = {
  name: string;
  placeholder: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
} & Partial<Omit<TCustomTextFieldProps, "error">> &
  Partial<{
    rulesMessage: string;
    backgroundColor: string;
    error: FieldErrors<FieldValues> | FieldError | boolean;
  }>;

export function ControlledInput({
  name,
  value,
  control,
  error,
  readOnly,
  borderColor = colors.soft_silver,
  defaultValue,
  rulesMessage,
  fontFamily = "Mulish",
  labelcolor = colors.enigmatic_midnight,
  helperText,
  type = "text",
  required = false,
  multiline = false,
  onEndAdornmentClick,
  ...props
}: TControlledInputProps) {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      rules={{ required: rulesMessage }}
      render={({ field, formState: { errors } }) => {
        return (
          <CustomTextField
            type={type}
            inputRef={field?.ref}
            readOnly={readOnly}
            required={required}
            multiline={multiline}
            onBlur={field?.onBlur}
            labelcolor={labelcolor}
            fontFamily={fontFamily}
            borderColor={borderColor}
            onChange={field?.onChange}
            value={value || field?.value}
            error={!!error || !!errors[name]}
            tabIndex={readOnly ? -1 : undefined}
            onEndAdornmentClick={onEndAdornmentClick}
            helperText={helperText || (errors[name]?.message as string)}
            {...props}
          />
        );
      }}
    />
  );
}
