import apiCall from "@/utils/apiCall";
import { handleResponse } from "@/utils/common";
import toast from "@/utils/toast";
import { create } from "zustand";

export const useProductsStore = create((set) => ({
    isLoading: false,
    products: [],
    getProducts: (data: any, callback: any) => { 
      set((state: any) => ({ ...state, isLoading: true }));
      apiCall('products', data, {
          showLoader: true
      }).then((response) => {
          let responseData = handleResponse(response);
          if (responseData) {
              if (responseData.status === true) {
                  set((state: any) => ({
                      ...state,
                      products: responseData.data,
                      isLoading: false
                  }));
                  callback?.success();
              } else {
                  callback?.error(responseData);
                  toast({ message: responseData.message });
                  set((state: any) => ({ ...state, isLoading: false }));
              }
          }
      });
  },

  }));
  