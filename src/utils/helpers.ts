import { colors } from "constants/common";
import { AppDispatch, RootState } from "types/common";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const capitalizeFirstLetter = (text: string): string => {
  return text[0].toUpperCase() + text.slice(1);
};

export function getTabSVGColor(isActive: boolean) {
  return isActive ? colors.primary : colors.neutral500;
}

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
