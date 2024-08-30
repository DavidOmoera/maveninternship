import { colors } from "constants/common";
import { AppDispatch, RootState } from "types/common";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import toast, { ToastOptions } from "react-hot-toast";
import { AxiosError, isAxiosError } from "axios";

export const capitalizeFirstLetter = (text: string): string => {
  return text[0].toUpperCase() + text.slice(1);
};

export function getTabSVGColor(isActive: boolean) {
  return isActive ? colors.primary : colors.neutral500;
}

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function searchObjects(
  list: Record<string, string>[],
  searchText = "",
  filterFields: string[]
) {
  return list?.filter((item) =>
    filterFields.some((prop) =>
      item[prop]?.toLowerCase().includes(searchText?.trim().toLowerCase())
    )
  );
}

export function showSuccessToast(message: string, options?: ToastOptions) {
  toast.success(message, options);
}

export function showErrorToast(message: string, options?: ToastOptions) {
  toast.error(message, options);
}

export function showLoadingToast(message: string, options?: ToastOptions) {
  toast.loading(message, options);
}

export function handleError(
  e: Error | AxiosError,
  defaultErrorMessage?: string
) {
  let errorMessage = "";

  if (isAxiosError(e)) {
    const errorResponse = e?.response?.data;
    const error = errorResponse?.detail; // Get error from backend
    errorMessage = typeof error === "string" ? error : "";
  }

  showErrorToast(errorMessage || defaultErrorMessage || "An error occured.");
}
