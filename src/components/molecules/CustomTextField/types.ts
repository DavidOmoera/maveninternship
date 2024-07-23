import { ReactNode, KeyboardEvent, ChangeEvent, MouseEvent } from "react";
import {
  InputBaseComponentProps,
  TextFieldPropsColorOverrides,
} from "@mui/material";

// Events
type EventCallback<T> = (event: T) => void;
export type TChangeEvent<T> = ChangeEvent<T>;
export type TChangeInputEvent = TChangeEvent<HTMLInputElement>;
export type TInputEventCallback = EventCallback<TChangeInputEvent>;
export type TMouseEventCallback = EventCallback<MouseEvent<HTMLDivElement>>;

export type TCustomStylesCreatorParams = {
  color: string;
  padding: string;
  fontFamily: string;
  iconPadding: string;
  borderColor: string;
  borderWidth: string;
  borderRadius: string;
  backGroundColor: string;
  height: string | number;
  placeHolderColor: string;
} & Partial<{
  error: boolean;
  warning: string | boolean;
}>;

export type TCustomTextFieldProps = TextFieldPropsColorOverrides & {
  placeholder: string;
} & Partial<{
    name: string;
    type: string;
    rows: number;
    error: boolean;
    label: string;
    value: string;
    height: string;
    asText: boolean;
    inputRef: React.Ref<any>;
    padding: string;
    focused: boolean;
    warning: boolean;
    tabIndex: number;
    className: string;
    required: boolean;
    disabled: boolean;
    readonly: boolean;
    autoFocus: boolean;
    id: string | number;
    labelColor: string;
    selected: boolean;
    borderWidth: string;
    helperText: string;
    multiline: boolean;
    children: ReactNode;
    borderColor: string;
    iconPadding: string;
    borderRadius: string;
    defaultValue: string;
    initialValue: string;
    fromPayment: boolean;
    withHelperText: boolean;
    backGroundColor: string;
    fromRequisition: boolean;
    placeHolderColor: string;
    containerClasses: string;
    leftIcon: React.ReactNode;
    maxWidth: string | number;
    rightIcon: React.ReactNode;
    isFromAutoComplete: boolean;
    onChange: TInputEventCallback;
    inputProps: InputBaseComponentProps;
    onEndAdornmentClick: TMouseEventCallback;
    variant: "outlined" | "filled" | "standard";
    onStartAdornmentClick: TMouseEventCallback;
    onBlur: React.FocusEventHandler<HTMLInputElement>;
    onFocus: React.FocusEventHandler<HTMLInputElement>;
    onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
    fontFamily: string;
    color:
      | "primary"
      | "secondary"
      | "error"
      | "info"
      | "success"
      | "warning"
      | string;
  }>;
