import { colors } from "constants/common";

export const capitalizeFirstLetter = (text: string): string => {
  return text[0].toUpperCase() + text.slice(1);
};

export function getTabSVGColor(isActive: boolean) {
  return isActive ? colors.primary : colors.neutral500;
}
