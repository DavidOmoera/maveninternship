import { forwardRef, ForwardedRef, useMemo } from "react";
import classNames from "classnames";
import { InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { colors, DEFAULT_FONT_NAME } from "constants/common";
import ErrorMessage from "./ErrorMessage";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

export type TOption = Partial<{
  id: number;
  name: string;
  label: string;
  title: string;
  user_id: number;
  disabled: boolean;
  value: string | number;
  color: string;
}>;

type TSelectProps = {
  options: TOption[];
} & Partial<{
  open: boolean;
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  label: string;
  error: boolean;
  border: string;
  padding: string;
  maxWidth: string;
  disabled: boolean;
  required: boolean;
  className: string;
  withTags: boolean;
  withClear: boolean;
  helperText: string;
  lineHeight: string;
  withLabel: boolean;
  labelClasses: string;
  showLabel: boolean;
  borderRadius: string;
  defaultValue: string;
  isWithoutIcon: boolean;
  isShowingPickerIcon: boolean;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  fontFamily: string;
  onClick: () => void;
}>;

const CustomSelect = forwardRef(
  (
    {
      icon,
      value,
      label,
      options,
      onChange,
      disabled,
      maxWidth,
      padding,
      fontFamily,
      helperText,
      lineHeight,
      defaultValue,
      labelClasses,
      error = false,
      required = false,
      borderRadius = "8px",
      withTags = false,
      showLabel = false,
      withLabel = true,
      withClear = false,
      isWithoutIcon = false,
      isShowingPickerIcon = true,
      onClick,
      ...props
    }: TSelectProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const theme = useTheme();
    const showClear = withClear && !!value;
    const darkMode = false;

    const renderMenuItemValue = (label: string) => {
      if (withTags) {
        return <p>Chips</p>;
      }
      return label;
    };

    const haveLabel = withLabel ? defaultValue || label : false;

    const labelClassName = classNames(
      "tracking-[0.08px] top-[-1px]",
      labelClasses
    );

    const IconComponent = useMemo(
      () => icon as React.FC<React.SVGProps<SVGSVGElement>>,
      [icon]
    );

    return (
      <FormControl
        error={error}
        sx={{
          m: 0,
          width: "100%",
          maxWidth: maxWidth,
          fontFamily: `${fontFamily} !important`,
          "& .MuiFormLabel-root": {
            fontFamily: `${fontFamily || DEFAULT_FONT_NAME} !important`,
          },
        }}
        ref={ref}
      >
        {haveLabel && (
          <InputLabel
            style={{
              color: error
                ? colors.crimson_red
                : darkMode
                ? "white"
                : colors.enigmatic_midnight,
            }}
            className={labelClassName}
            id="simple-select-label"
          >
            {haveLabel}
          </InputLabel>
        )}
        {helperText && error && <ErrorMessage message={helperText} />}

        <Select
          required={required}
          disabled={disabled}
          className="tracking-[0.08px] capitalize"
          sx={{
            "& .MuiSelect-icon": {
              right: "12px",
              top: "calc(50% - 12px)",
            },
            pr: "16px",
            borderRadius: "10px",
            fontFamily,
            color: darkMode ? "white" : "#222",
            lineHeight: `${lineHeight} !important`,
            "& .MuiSelect-select": {
              padding,
              display: "flex",
              alignItems: "center",
            },

            "&:hover fieldset": {
              borderColor: darkMode
                ? "#ffffff !important"
                : "#2067dd !important",
            },

            fieldset: {
              border: error
                ? "1px solid red !important"
                : darkMode
                ? "1px solid #6b7280 !important"
                : "1px solid #EDEFF1",
              borderWidth: "1px !important",
            },
          }}
          value={value}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
                marginTop: "8px",
              },
              sx: {
                "& .MuiList-root": {
                  paddingTop: 0,
                  paddingBottom: 0,
                },
              },
            },
          }}
          id="simple-select"
          onChange={onChange}
          IconComponent={(props) => (
            <>
              {!isWithoutIcon && (
                <>
                  {showClear ? "Close" : null}
                  {isShowingPickerIcon ? (
                    <ExpandMoreOutlinedIcon {...props} />
                  ) : null}
                </>
              )}
            </>
          )}
          label={label}
          labelId="simple-select-label"
          style={{
            background: darkMode ? colors.dark_mode_bg : colors.white,
            borderRadius,
          }}
          onClick={onClick}
          {...props}
        >
          {options?.length
            ? options.map(({ value, label }) => (
                <MenuItem
                  key={value}
                  value={value}
                  className="tracking-[0.08px] capitalize"
                  sx={{
                    fontWeight: theme.typography.fontWeightMedium,
                    color: colors.neutral950,
                    borderBottom: `1px solid ${colors.neutral200}`,
                    "&:hover": {
                      background: "#D2E1F9",
                    },
                  }}
                >
                  {icon && <IconComponent style={{ marginRight: "8px" }} />}
                  {showLabel ? label : renderMenuItemValue(label as string)}
                </MenuItem>
              ))
            : null}
        </Select>
      </FormControl>
    );
  }
);

export default CustomSelect;
