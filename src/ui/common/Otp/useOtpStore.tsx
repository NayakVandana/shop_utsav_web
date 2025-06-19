import apiCall from "@/utils/apiCall";
import { handleResponse } from "@/utils/common";
import toast from "@/utils/toast";
import { create } from "zustand";

export const useOtpStore = create((set) => ({
    isSending: false,
    otp_response: {},

    sendOtp: (data:any, callback:any) => {
        set({ isSending: true });
        apiCall('send-otp', data, {
            showLoader: true
        }).then((response) => {
            let responseData = handleResponse(response);
            if (responseData) {
                if (responseData.status == true) {
                    set((state: any) => ({ ...state, isSending: false, otp_response: responseData.data }));
                    // toast({ message: responseData.message, status: 'success' });
                    callback?.success();
                } else {
                    toast({ message: responseData.message });
                    set((state: any) => ({ ...state, isSending: true }));
                    callback?.error(responseData);
                }
            }
        });
    },

    verifyOtp: (data:any, callback:any) => {
        set({ isLoading: true });
        apiCall('verify-otp', data).then((response) => {
            let responseData = handleResponse(response);
            if (responseData) {
                if (responseData.status == true) {
                    set((state: any) => ({ ...state, isLoading: false }));
                    callback?.success();
                } else {
                    toast({ message: responseData.message });
                    callback?.error(responseData);
                    set((state: any) => ({ ...state, isLoading: true }));

                }
            }
        });
    },

}))