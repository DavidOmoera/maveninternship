import { SelectChangeEvent } from "@mui/material";
import CustomSelect, { TOption } from "components/molecules/CustomSelect";
import { DEFAULT_FONT_NAME } from "constants/common";
import { Dispatch, SetStateAction } from "react";
import { Control, Controller } from "react-hook-form";

type TTControlledSelectProps = {
  name: string;
  options: TOption[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
} & Partial<{
  open: boolean;
  errors: boolean;
  label: string;
  required: boolean;
  padding: string;
  border: string;
  helperText: string;
  lineHeight: string;
  labelClasses: string;
  borderRadius: string;
  defaultValue: string;
  setValue: Dispatch<SetStateAction<string>>;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  fontFamily: string;
  onClick: () => void;
}>;

export function ControlledSelect({
  name,
  label,
  control,
  required = false,
  setValue,
  fontFamily = DEFAULT_FONT_NAME,
  defaultValue,
  ...props
}: TTControlledSelectProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, formState: { errors } }) => {
        function handleOnChange(event: SelectChangeEvent<string>) {
          onChange(event);
          setValue?.(event.target.value);
        }

        return (
          <CustomSelect
            showLabel
            label={label}
            value={value}
            maxWidth="100%"
            required={required}
            withLabel={!!label}
            onChange={handleOnChange}
            error={!!errors[name]}
            fontFamily={fontFamily}
            defaultValue={defaultValue}
            {...props}
          />
        );
      }}
    />
  );
}
