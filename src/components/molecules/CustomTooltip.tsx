import { FC } from "react";
import { Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material";

export type TCustomTooltipProps = TooltipProps &
  Partial<{
    arrow: boolean;
    forHtml: boolean;
    maxWidth: number;
    background: string;
    arrowColor: string;
  }>;

export const CustomTooltip: FC<TCustomTooltipProps> = ({
  title,
  arrow,
  maxWidth,
  children,
  background,
  forHtml = false,
  arrowColor = "white",
  ...rest
}) => {
  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "transparent",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: maxWidth,
      border: "none",
      padding: 0,
    },
    "& .MuiTooltip-arrow": {
      color: arrowColor,
    },
  }));

  return (
    <>
      {forHtml ? (
        <HtmlTooltip
          sx={{
            background: background ? background : "white",
            color: "black",
            maxWidth: maxWidth,
            width: "100%",
          }}
          {...rest}
          title={title}
          arrow={arrow}
          onMouseLeave={rest.onMouseLeave}
        >
          {children}
        </HtmlTooltip>
      ) : (
        <Tooltip
          sx={{
            color: "black",
            maxWidth: maxWidth,
            background: `${background} !important`,
          }}
          {...rest}
          title={title}
          arrow={arrow}
        >
          {children}
        </Tooltip>
      )}
    </>
  );
};
