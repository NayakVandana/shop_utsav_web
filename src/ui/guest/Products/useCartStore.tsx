import apiCall from "@/utils/apiCall";
import { handleResponse } from "@/utils/common";
import toast from "@/utils/toast";
import { create } from "zustand";

export const useCartStore = create((set) => ({
  isLoading: false,
  cards: [],
  addToCart: (data, callback) => {
    set({ isLoading: true });
    apiCall('user/cart/save', data, { showLoader: true }).then((response) => {
      let responseData = handleResponse(response);
      if (responseData) {
        if (responseData.status == true) {
          set((state) => ({
            ...state,
            isLoading: false,
            cards: responseData?.data?.cards,
          }));
          callback?.success();
          toast({ message: responseData.message, status: 'success' });
        } else {
          toast({ message: responseData.message });
          set((state) => ({ ...state, isLoading: false }));
          callback?.error(responseData);
        }
      }
    });
  },
}));
