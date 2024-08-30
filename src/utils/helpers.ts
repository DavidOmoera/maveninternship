import { colors } from "constants/common";
import { AppDispatch, RootState } from "types/common";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import toast, { ToastOptions } from "react-hot-toast";
import { AxiosError, isAxiosError } from "axios";



// Capitalize the first letter of a string
export const capitalizeFirstLetter = (text: string): string => {
  return text[0].toUpperCase() + text.slice(1);
};

// Get the SVG color based on active status
export function getTabSVGColor(isActive: boolean) {
  return isActive ? colors.primary : colors.neutral500;
}

// Custom hooks for dispatch and selector
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Filter objects based on search text and filter fields
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

// Handle API errors and provide appropriate feedback
type ApiErrorResponse = {
  detail?: string;
};

export const handleApiError = (error: AxiosError): never => {
  if (error.response) {
    const data = error.response.data as ApiErrorResponse;

    // Handle specific status codes or log the error
    switch (error.response.status) {
      case 403:
        console.error(
          "403 Forbidden: Access is denied. Please check your API credentials or permissions."
        );
        break;
      case 404:
        console.error(
          "404 Not Found: The requested resource could not be found."
        );
        break;
      case 422:
        console.error("422 Validation Error:", data.detail);
        break;
      case 500:
        console.error(
          "500 Internal Server Error: The server encountered an error."
        );
        break;
      default:
        console.error(
          "An unexpected error occurred:",
          error.response.status,
          error.response.data
        );
    }
  } else if (error.request) {
    console.error("No response was received from the server:", error.request);
  } else {
    console.error("Error in setting up the request:", error.message);
  }
  // throw  error to match the 'never' return type
  throw error;
};

