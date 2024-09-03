import { BrowserStorageKeys, BrowserStorageOptions } from "types/common";

const BrowserStorageService = {
  get: (
    key: BrowserStorageKeys,
    options?: BrowserStorageOptions
  ): string | null => {
    const storage = options?.session ? sessionStorage : localStorage;

    return storage.getItem(key);
  },

  set: (
    key: BrowserStorageKeys,
    value: string,
    options?: BrowserStorageOptions
  ): void => {
    const storage = options?.session ? sessionStorage : localStorage;

    storage.setItem(key, value);
  },

  remove: (key: BrowserStorageKeys, options?: BrowserStorageOptions): void => {
    const storage = options?.session ? sessionStorage : localStorage;

    storage.removeItem(key);
  },

  update: (
    key: BrowserStorageKeys,
    value: string,
    options?: BrowserStorageOptions
  ): void => {
    const storage = options?.session ? sessionStorage : localStorage;

    if (storage.getItem(key)) {
      storage.removeItem(key);
      storage.setItem(key, value);
    }
  },
};

export default BrowserStorageService;
