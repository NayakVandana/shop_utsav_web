import { create } from "zustand";

export const useApiLoadingStore = create(
    (set) => ({
        isLoading: false,
        laodingText: "",
        showLoader: (laodingText = "") => {
            set({
                isLoading: true,
                laodingText: laodingText
            });
        },
        hideLoader: () => {
            set({
                isLoading: false,
            });
        },
    })
);

