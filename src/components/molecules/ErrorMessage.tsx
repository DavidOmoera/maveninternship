import ErrorIcon from "@mui/icons-material/Error";
import { CSSProperties, FC } from "react";

import { CustomTooltip } from "./CustomTooltip";
import { capitalizeFirstLetter } from "utils/helpers";

type TErrorMessageProps = {
  message: string;
} & Partial<{
  style: CSSProperties;
}>;

const defaultStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "5px",
  right: "5px",
  width: "16px",
  height: "16px",
  zIndex: 10,
  color: "white",
  borderRadius: "50%",
  background: "red",
} as CSSProperties;

const ErrorMessage: FC<TErrorMessageProps> = ({ message, style }) => (
  <CustomTooltip title={capitalizeFirstLetter(message || "")}>
    <div style={style ?? defaultStyle}>
      <ErrorIcon sx={{ width: "15px", height: "15px" }} />
    </div>
  </CustomTooltip>
);

export default ErrorMessage;
