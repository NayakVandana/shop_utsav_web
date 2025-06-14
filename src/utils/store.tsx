
import { create } from "zustand";
import { createJSONStorage, persist } from 'zustand/middleware';
import toast from './toast';
import apiCall from './apiCall';
import { handleResponse } from './common';
import SecureStorage from "./SecureStorage";


export const useCheckIsRegistered = create((set) => ({
    GstIsRegistered: {},
    checkGstIsRegistered: (data: any, callback: any) => {
        apiCall("check-gst-isregistered", data, { showLoader: true }).then((response) => {
            console.log(response);
            let responseData = handleResponse(response);
            if (responseData) {
                if (responseData.status == true) {
                    set((state: any) => ({ ...state, GstIsRegistered: responseData.data }));
                    callback?.success();
                } else {
                    callback?.error(responseData);
                    toast({ message: responseData.message });
                }
            }
        });
    },

    PanIsRegistered: {},
    checkPanIsRegistered: (data: any, callback: any) => {
        apiCall("check-pan-isregistered", data, { showLoader: true }).then((response) => {
            let responseData = handleResponse(response);
            if (responseData) {
                if (responseData.status == true) {
                    set((state: any) => ({ ...state, PanIsRegistered: responseData.data }));
                    callback?.success();
                } else {
                    callback?.error(responseData);
                    toast({ message: responseData.message });
                }
            }
        });
    },

    mobileIsRegistered: {},
    checkMobileIsRegistered: (data: any, callback: any) => {
        set((state: any) => ({ ...state, mobileIsRegistered: {} }));
        apiCall("/check-mobile-isregistered", data, { showLoader: true }).then((response) => {
            let responseData = handleResponse(response);
            if (responseData) {
                if (responseData.status == true) {
                    set((state: any) => ({ ...state, mobileIsRegistered: responseData.data }));
                    callback?.success();
                } else {
                    callback?.error(responseData);
                    toast({ message: responseData.message });
                }
            }
        });
    },
    resetMobileIsRegistered: () => {
        set((state: any) => ({ ...state, mobileIsRegistered: {} }))
    },
    verificationToken: {},
    sendOtpToMobile: (data: any, callback: any) => {
        apiCall("/send-otp", data, { showLoader: true }).then((response) => {
            let responseData = handleResponse(response);
            if (responseData) {
                if (responseData.status == true) {
                    set((state: any) => ({ ...state, verificationToken: responseData.data }));
                    callback?.success(responseData.data);
                } else {
                    callback?.error(responseData);
                    toast({ message: responseData.message });
                }
            }
        });
    },
})
);

export const usePincodeStore = create((set) => ({
    pincodeData: {},
    getPincode: (data: any, callback: any) => {
        apiCall("/get-pincode", data, { showLoader: true }).then((response) => {
            let responseData = handleResponse(response);
            if (responseData) {
                if (responseData.status == true) {
                    set((state: any) => ({ ...state, pincodeData: responseData.data }));
                    callback?.success(responseData.data);
                } else {
                    toast({ message: responseData.message });
                    callback?.error()
                }
            }
        });
    },
}));

// TODO: later we should be able to use the
export const useAppConfigStore = create(
    persist((set, get) => ({
        appConfig: false,
        loadAppConfig: (data: null | undefined, callback: { success: () => void; }) => {
            apiCall('load-app-config', data).then((response) => {
                let responseData = handleResponse(response);
                if (responseData) {
                    if (responseData?.status == true) {
                        set({ appConfig: responseData.data });
                        callback?.success();
                    }
                }
            });
        }
    }), {
        name: "app-config-store",
        storage: createJSONStorage(() => SecureStorage),
    })
);


export const useDeviceTokenStore = create(
    (set, get) => ({
        device_token: '',
        saveDeviceToken: (data: any) => {
            set({ device_token: data.token })
            apiCall('save-device-token', data);
        },
    }),
);