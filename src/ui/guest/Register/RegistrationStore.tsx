import { create } from "zustand";
import apiCall from "@/utils/apiCall";
import { handleResponse } from "@/utils/common";
import toast from "@/utils/toast";

export const useRegistrationStore = create((set) => ({
    // data: {},
    validateData: (data: any, callback: any) => {
        apiCall('user/check-registration-validation', data, { showLoader: true }).then((response) => {
            let responseData = handleResponse(response);
            if (responseData) {
                if (responseData.status == true) {
                    // set({ data: responseData.data });
                    callback?.success();
                    // toast({ message: responseData.message, status: "success" });
                } else {
                    toast({ message: responseData.message });
                }
            }
        });
    },
    postRegistration: (data: any, callback: any) => {
        apiCall('user/register', data, {
            showLoader: true
        }).then((response) => {
            let responseData = handleResponse(response);
            if (responseData) {
                if (responseData.status == true) {
                    // set({ data: responseData.data });
                    callback?.success(responseData.data);
                    toast({ message: responseData.message, status: "success" });
                } else {
                    toast({ message: responseData.message });
                    callback?.error(responseData);
                }
            }
        });
    },
})
);
